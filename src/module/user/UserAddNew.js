import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {
  Button,
  Field,
  Input,
  InputPasswordToogle,
  Label,
} from "../../components";
import DashboardHeading from "../dashboard/DashboardHeading";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-app/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import slugify from "slugify";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/auth-context";
import { roleStatus } from "../../utils/constants";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

const UserAddNewStyles = styled.div`
  .user-layout {
    display: grid;
    grid-template-columns: repeat(2, 45%);
    column-gap: 40px;
    margin-bottom: 40px;
  }
  .button {
    margin: 0 auto;
    max-width: 250px;
  }
  @media screen and (max-width: 600px) {
    .user-layout {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
const schema = yup.object({
  fullName: yup.string().required("Please enter full name"),
  userName: yup
    .string()
    .required("Please enter user name")
    .max(9, "Username must be less than 10 characters"),
  email: yup
    .string()
    .required("Please enter email address")
    .email("Please enter valid email address"),
  password: yup
    .string()
    .required("Please enter password")
    .min(8, "Password must be least 8 characters"),
});
const UserAddNew = () => {
  const { userInfo } = useAuth();
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      createdAt: new Date(),
    },
  });
  const handleAddUser = async (values) => {
    if (!isValid) return null;
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    // await updateProfile(auth.currentUser, { displayName: values.fullName });
    toast.success(`${t("toastCreateUser")}`);
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      userName: values.userName,
      slug: slugify(values.fullName, {
        lower: true,
        // replacement: "",
        // trim: true,
      }),
      role: 3,
      status: 1,
      avatar: "/user.jpg",
      createdAt: serverTimestamp(),
      watchLater: [],
    });
  };
  useEffect(() => {
    const arrErros = Object.values(errors);
    if (arrErros.length > 0) {
      toast.error(arrErros[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  useEffect(() => {
    document.title = "User Add Page";
  });
  if (userInfo?.role !== roleStatus.Admin) return null;
  return (
    <UserAddNewStyles>
      <DashboardHeading
        title={t("newUser")}
        desc={t("addNewUser")}
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleAddUser)}>
        <div className="user-layout">
          <Field>
            <Label htmlFor="email">{t("email")}</Label>
            <Input
              control={control}
              name="email"
              placeholder={t("emailPlace")}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="fullName">{t("fullName")}</Label>
            <Input
              control={control}
              name="fullName"
              placeholder={t("fullNamePlace")}
            ></Input>
          </Field>
        </div>
        <div className="user-layout">
          <Field>
            <Label htmlFor="userName">{t("userName")}</Label>
            <Input
              placeholder={t("userNamePlace")}
              type="text"
              name="userName"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="userName">{t("pass")}</Label>
            <InputPasswordToogle control={control}></InputPasswordToogle>
          </Field>
        </div>
        <Button
          type="submit"
          kind="primary"
          className="button"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {t("addNewUser")}
        </Button>
      </form>
    </UserAddNewStyles>
  );
};

export default UserAddNew;
