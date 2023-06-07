import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    vn: {
      translation: {
        home: "Trang Chủ",
        blog: "Bài Viết",
        about: "Về Chúng Tôi",
        signIn: "Đăng Nhập",
        signUp: "Đăng Kí",
        signOut: "Đăng xuất",
        feature: "Bài Viết Nổi Bật",
        newest: "Bài Viết Mới",
        more: "Thêm",
        related: "Bài viết liên quan",
        category: "Danh Mục",
        fullName: "Họ và tên",
        userName: "Tên tài khoản",
        address: "Địa chỉ",
        phone: "Số điện thoại",
        email: "Địa chỉ Email",
        pass: "Mật Khẩu",
        createAt: "Ngày tạo",
        status: "Trạng thái",
        role: "Phân quyền",
        fullNamePlace: "Nhập họ và tên",
        userNamePlace: "Nhập tên tài khoản",
        emailPlace: "Nhập địa chỉ email",
        passPlace: "Nhập mật khẩu",
        titleAlreadyAccount: "Nếu bạn đã có tài khoản?",
        titleNotAccount: "Nếu bạn chưa có tài khoản?",
        titleLogin: "Hãy đăng nhập",
        titleRegister: "Hãy nhấn dòng này",
        titleBlog: "Danh mục",
        userAccount: "Tài khoản người dùng",
        editAccount: "Chỉnh sửa tài khoản",
        watchLater: "xem sau",
        createPost: "Tạo bài viết",
        myPost: "Bài viết của tôi",
        personalInfo: "Thông tin cá nhân",
        manage: "Quản trị ",
        info: "Thông tin",
        account: "Tài khoản",
        contact: "Liên hệ",
        contactText:
          "Mọi thắc mắc, xin vui lòng liên hệ thông qua hộp thoại bên dưới",
        inputContact: "Nhập thông tin",
        support: "Hỗ trợ",
        company: "Công ty",
        send: "Gửi",
        enterKey: "Nhập tiêu đề bài viết cần tìm",
        notificationFind: "Vui lòng nhập tiêu đề cần tìm",
        dashboard: "Bảng điều khiển",
        overviewDashboard: "Tổng quan màn hình bảng điều khiển",
        post: "Bài viết",
        user: "Người dùng",
        managePost: "Quản lý bài viết",
        manageCategory: "Quản lý danh mục",
        manageUser: "Quản lý người dùng",
        manageAboutUs: "Quản lý nội dung giới thiệu",
        searchPost: "Tìm kiếm bài viết",
        searchCategory: "Tìm kiếm danh mục",
        searchUser: "Tìm kiếm người dùng",
        addNew: "Thêm mới",
        addNewCategory: "Thêm Mới Danh mục",
        addNewPost: "Thêm Mới Bài Viết",
        addNewUser: "Thêm mới Người Dùng",
        newPost: "Bài Viết Mới",
        newCategory: "Danh Mục Mới",
        newUser: "Người Dùng Mới",
        updateCategory: "Cập Nhật Danh Mục",
        updatePost: "Cập Nhật Bài Viết",
        updateUser: "Cập Nhật Người Dùng",
        updateAbout: "Cập Nhật Thông Tin",
        updatePostId: "Cập nhật bài viết có Id:",
        updateCategoryId: "Cập nhật danh mục có Id:",
        updateUserId: "Cập nhật người dùng có Id:",
        author: "Tác giả",
        action: "Hoạt động",
        name: "Tên",
        slug: "Đường dẫn",
        title: "Tiêu đê",
        uploadImage: "Tải lên hình ảnh",
        content: "Nội dung bài viết",
        description: "Mô tả",
        info: "Thông tin",
        categoryPlace: "Nhập tên danh mục",
        slugPlace: "Nhập đường dẫn",
        titlePlace: "Nhập tiêu đề",
        myPost: "Bài viết của tôi",
        manageMyPost: "Quản lý bài viết của tôi",
        signInSuccess: "Đăng nhập tài khoản thành công!",
        signUpSuccess: "Đăng kí tài khoản thành công!",
        signOutSuccess: "Đăng xuất tài khoản thành công!",
        toastUpdateCategory: "Cập nhật danh mục thành công!",
        toastUpdateUser: "Cập nhật tài khoản người dùng thành công!",
        toastUpdatePost: "Cập nhật bài viết thành công!",
        toastUpdateAbout: "Cập nhật thông tin thành công!",
        toastCreateCategory: "Tạo danh mục mới thành công!",
        toastCreateUser: "Tạo tài khoản mới thành công!",
        toastCreatePost: "Tạo bài viết mới thành công!",
        toastSavePost: "Lưu bài viết thành công!",
        toastSavePostFail: "Xóa bài viết khỏi danh sách lưu thành công!",
        slogan: "Viết - Chia sẻ - Kết nối - Chiêm nghiệm",
        slogan2: "Tất cả tại Blogging",
        getStarted: "Bắt đầu",
        all: "",
      },
    },
    en: {
      translation: {
        home: "Home",
        blog: "Blog",
        about: "About Us",
        signIn: "Sign In",
        signUp: "Sing Up",
        signOut: "Sign Out",
        feature: "Feature",
        newest: "Newest Update",
        more: "More",
        related: "Post Related",
        category: "Category",
        fullName: "Full Name",
        userName: "User Name",
        address: "Address",
        phone: "Phone",
        email: "Email Address",
        pass: "Password",
        createAt: "Create At",
        status: "Status",
        role: "Role",
        fullNamePlace: "Enter your full name",
        userNamePlace: "Enter your user name",
        emailPlace: "Enter your email",
        passPlace: "Enter your password",
        titleAlreadyAccount: "You already have an account?",
        titleNotAccount: "You have not had an account?",
        titleLogin: "Login",
        titleRegister: "Register an account",
        titleBlog: "",
        userAccount: "User Account",
        editAccount: "Edit Account",
        watchLater: "Watch Later",
        createPost: "Create Post",
        myPost: "My Post",
        personalInfo: "Personal Infomation",
        manage: "Manage",
        info: "Infomation",
        account: "Account",
        contact: "Contact",
        contactText: "All inquiries, please contact us via the input box below",
        inputContact: "Input your text",
        support: "Support",
        company: "Company",
        send: "Send",
        enterKey: "Enter keyword",
        notificationFind: "Please enter the keyword to find",
        dashboard: "Dashboard",
        overviewDashboard: "Overview dashboard monitor",
        post: "Post",
        user: "User",
        managePost: "Manage your post",
        manageCategory: "Manage your category",
        manageUser: "Manage your user",
        manageAboutUs: "Manage your about us",
        searchPost: "Search Post",
        searchCategory: "Search Category",
        searchUser: "Search User",
        addNew: "Add New",
        addNewCategory: "Add New Category",
        addNewPost: "Add New Post",
        addNewUser: "Add New User",
        newPost: "New Post",
        newCategory: "New Category",
        newUser: "New User",
        updateCategory: "Update Category",
        updatePost: "Update Post",
        updateUser: "Update User",
        updateAbout: "Update Infomation",
        updatePostId: "Update Post your Id:",
        updateCategoryId: "Update Category your Id:",
        updateUserId: "Update User your Id:",
        author: "Author",
        action: "Actions",
        name: "Name",
        slug: "Slug",
        title: "Title",
        uploadImage: "Upload Image",
        content: "Content",
        description: "Description",
        info: "Infomation",
        categoryPalce: "Enter your category name",
        slugPlace: "Enter your slug",
        titlePlace: "Enter your title",
        myPost: "My Post",
        manageMyPost: "Manage My Post",
        signInSuccess: "Sign in Successfully!",
        signUpSuccess: "Register user sucessfully!",
        signOutSuccess: "Sign out sucessfully!",
        toastUpdateCategory: "Update category successfully!",
        toastUpdateUser: "Update user successfully!",
        toastUpdatePost: "Update post successfully!",
        toastUpdateAbout: "Update about us successfully!",
        toastCreateCategory: "Add new category successfully!",
        toastCreateUser: "Add new user successfully!",
        toastCreatePost: "Add new posts successfully!",
        toastSavePost: "Add Watch Later Successful!",
        toastSavePostFail: "Remove Watch Later Successful!",
        slogan: "Write - Share - Connect - Contemplate",
        slogan2: "All at Blogging",
        getStarted: "Get Started",
        all: "All",
      },
    },
  },
  lng: localStorage.getItem("lng") || "en",
  //   fallbackLng: "vn",
  //   interpolation: {
  //     escapeValue: false,
  //   },
});
