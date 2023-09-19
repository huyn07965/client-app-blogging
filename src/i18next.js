import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    vn: {
      translation: {
        home: "Trang Chủ",
        blog: "Bài Viết",
        about: "Về Chúng Tôi",
        titleWebsite: "Tiêu đề website",
        imageBanner: " Hình ảnh quảng bá",
        rule: "Nội quy",
        titleRule: "Nội quy công ty",
        general: "Chung",
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
        codePlace: "Nhập mã code mà bạn nhận được",
        passPlace: "Nhập mật khẩu",
        confirmPassPlace: "Nhập lại mật khẩu",
        titleAlreadyAccount: "Nếu bạn đã có tài khoản?",
        titleNotAccount: "Nếu bạn chưa có tài khoản?",
        titleForgetPass: "Nếu bạn quên mật khẩu?",
        titleLogin: "Hãy đăng nhập",
        titleRegister: "Hãy nhấn dòng này",
        titleResetPass: "Hãy nhấn dòng này",
        titleBlog: "Danh mục",
        userAccount: "Tài khoản người dùng",
        editAccount: "Chỉnh sửa tài khoản",
        watchLater: "xem sau",
        createPost: "Tạo bài viết",
        myPost: "Bài viết của tôi",
        personalInfo: "Thông tin cá nhân",
        manage: "Quản lý",
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
        report: "Báo cáo",
        managePost: "Quản lý bài viết",
        manageCategory: "Quản lý danh mục",
        manageUser: "Quản lý người dùng",
        manageReport: "Quản lý báo cáo của người dùng",
        manageAboutUs: "Quản lý nội dung giới thiệu",
        manageGeneral: "Quản lý cài đặt chung",
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
        userId: "Mã người dùng",
        postId: "Mã bài viết",
        reason: "Lý do",
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
        all: "Tất cả",
        dataInMonth: "Dữ liệu trong tháng",
        userInMonth: "Người dùng đăng kí mới",
        amount: "Số lượng",
        comment: "Bình luận",
        reply: "Phản hồi",
        inputComment: "Vui lòng nhập bình luận của bạn",
        changeBanner: "Thay đổi thông tin thành công",
        changePassErr: "Mật khẩu không trùng khớp",
        changePassSuccess: "Thay đổi mật khẩu thành công",
        signInErr: "Đã xảy ra lỗi trong quá trình đăng nhập",
        signUpAuthorErr: "Vui lòng tích vào mục đồng ý điều khoản",
        signUpAuthorSuccess: "Đăng kí tài khoản tác giả thành công",
        approveRule: "Tôi đồng ý với điều khoản đăng kí",
        writeDesc: "Hãy viết một đoạn mô tả ngắn về bản thân",
        writeDescLike: `(sở thích/lý tưởng/...)`,
        inputEmail: "Vui lòng nhập email của bạn",
        inputCode: "Vui lòng nhập code bạn nhận được",
        changePass: "Đặt lại mật khẩu cho tài khoản của bạn",
        repSendMail:
          "Mã otp sẽ được gửi vào email của bạn, vui lòng kiểm tra hòm thư hoặc thư mục spam sau khi nhấn gửi!",
        titleReport: "Hãy cho chúng tôi biết lý do",
        reportSuccess: "Bạn đã báo cáo thành công",
        reportUser: "Báo cáo từ người dùng",
        viewPost: "Xem bài viết",
        reasonOne: "Vi phạm nguyên tắc cộng đồng",
        reasonTwo: "Sao chép từ nguồn khác",
        reasonThree: "Ngôn từ mang tính chất xúc phạm",
        deleteAllReject: "Xóa tất cả",
        resetPass: "Quên Mật khẩu",
        filter: "Lọc",
        filterNew: "Mới nhất",
        filterLikeIncre: "Like giảm",
        filterLikeDecre: "Like tăng",
        filterViewIncre: "View giảm",
        filterViewDecre: "View tăng",
        postAuth: "Những bài viết của",
        signInErrValid: "Email hoặc mật khẩu không đúng! Vui lòng nhập lại",
        toastSignIn: "Vui lòng nhập đầy đủ thông tin",
        validPass: "Mật khẩu phải có ít nhất 8 kí tự",
      },
    },
    en: {
      translation: {
        home: "Home",
        blog: "Blog",
        about: "About Us",
        general: "General",
        titleWebsite: "Title",
        imageBanner: "Image Banner",
        rule: "Rule",
        titleRule: "Internal Regulations",
        signIn: "Sign In",
        signUp: "Sign Up",
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
        codePlace: "Enter your code",
        passPlace: "Enter your password",
        confirmPassPlace: "Confirm your password",
        titleAlreadyAccount: "You already have an account?",
        titleNotAccount: "You have not had an password?",
        titleForgetPass: "You have forget an account?",
        titleLogin: "Login",
        titleRegister: "Register an account",
        titleResetPass: "Reset password",
        titleBlog: "Category",
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
        report: "Report",
        managePost: "Manage your post",
        manageCategory: "Manage your category",
        manageUser: "Manage your user",
        manageReport: "Manage Report",
        manageAboutUs: "Manage your about us",
        manageGeneral: "Manage General Website",
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
        userId: "User Id",
        postId: "Post Id",
        reason: " Reason",
        categoryPlace: "Enter your category name",
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
        slogan2: "All in Blogging",
        getStarted: "Get Started",
        all: "All",
        dataInMonth: "Data within the month",
        userInMonth: "New user registration",
        amount: "Amount",
        comment: "Comment",
        reply: "Relpy",
        inputComment: "Please enter your comment",
        changeBanner: "Information successfully updated",
        changePassErr: "Password does not match",
        changePassSuccess: "Password successfully changed",
        signInErr: "An error occurred during login",
        signUpAuthorErr: "Please check the box to agree to the terms",
        signUpAuthorSuccess: "Author account registration successful",
        approveRule: "I agree to the registration terms",
        writeDesc: "Please write a short description about yourself",
        writeDescLike: `(interests/ideals/...)`,
        inputEmail: "Please enter your email",
        inputCode: "Please enter the code you received",
        changePass: "Change password for your account",
        repSendMail:
          "The OTP code will be sent to your email, please check your inbox or spam folder after clicking send!",
        titleReport: "Please let us know the reason",
        reportSuccess: "You have successfully reported",
        reportUser: "Report from the user",
        viewPost: "View Post",
        reasonOne: "Violation of community guidelines",
        reasonTwo: "Copying from another source",
        reasonThree: "Offensive language",
        deleteAllReject: "Delete All Reject",
        resetPass: "Reset Password",
        filter: "filter",
        filterNew: "Newest",
        filterLikeDecre: "Like Decreasing ",
        filterLikeIncre: "Like Increasing ",
        filterViewDecre: "View Decreasing",
        filterViewIncre: "View Increasing ",
        postAuth: "Posts by",
        signInErrValid: "Email or password is incorrect! Please re-enter",
        toastSignIn: "Please enter all the required information",
        validPass: "The password must be at least 8 characters",
      },
    },
  },
  lng: localStorage.getItem("lng") || "en",
  //   fallbackLng: "vn",
  //   interpolation: {
  //     escapeValue: false,
  //   },
});
