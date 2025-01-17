document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-right a'); // Tất cả các liên kết trong menu
  const offerLinks = document.querySelectorAll('.offer-link'); // Các liên kết trong các mục offer-item

  // Lấy giá trị tab đang được chọn từ localStorage
  const savedActiveTab = localStorage.getItem('activeTab');
  if (savedActiveTab) {
    const activeLink = document.querySelector(`.nav-right a[href="${savedActiveTab}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  } else {
    // Nếu không có tab đã lưu, mặc định chọn Home
    document.querySelector('.nav-right a[href="index.html"]').classList.add('active');
  }

  // Sự kiện khi nhấn vào các offer-link
  offerLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Loại bỏ lớp 'active' khỏi tất cả các tab
      navLinks.forEach(link => link.classList.remove('active'));

      // Thêm lớp 'active' vào tab tương ứng
      const tabLink = document.querySelector(`.nav-right a[href="${this.getAttribute('href')}"]`);
      tabLink.classList.add('active');

      // Lưu lại tab đã chọn vào localStorage
      localStorage.setItem('activeTab', this.getAttribute('href'));
    });
  });

  // Sự kiện khi nhấn vào bất kỳ tab nào trong menu
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Loại bỏ lớp 'active' khỏi tất cả các tab
      navLinks.forEach(link => link.classList.remove('active'));

      // Thêm lớp 'active' vào tab được chọn
      this.classList.add('active');

      // Lưu lại tab đã chọn vào localStorage
      localStorage.setItem('activeTab', this.getAttribute('href'));
    });
  });
});



// Mở modal đăng nhập
document.getElementById('login-btn').addEventListener('click', function () {
    document.getElementById('login-overlay').style.display = 'block';
});

// Mở modal đăng ký từ liên kết "No account yet? Sign up"
document.getElementById('signup-link').addEventListener('click', function () {
    document.getElementById('login-overlay').style.display = 'none'; // Ẩn khung Login
    document.getElementById('signup-overlay').style.display = 'block'; // Hiển thị khung Sign Up
});

// Đóng modal đăng nhập
document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('login-overlay').style.display = 'none';
});

// Đóng modal đăng ký
document.getElementById('close-signup-btn').addEventListener('click', function () {
    document.getElementById('signup-overlay').style.display = 'none';
});

// Chuyển từ Sign Up về Login
document.getElementById('login-link').addEventListener('click', function () {
    document.getElementById('signup-overlay').style.display = 'none'; // Ẩn Sign Up modal
    document.getElementById('login-overlay').style.display = 'block'; // Hiển thị Login modal
});

// Mở khung Forgot Password khi click vào "Forgot Password"
document.getElementById("forgot-password-link").addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn link chuyển hướng
    document.getElementById("login-overlay").style.display = "none"; // Ẩn khung Login
    document.getElementById("forgot-password-overlay").style.display = "flex"; // Hiển thị khung Forgot Password
});

// Đóng khung Forgot Password khi nhấn vào dấu "X"
document.getElementById("close-forgot-password-btn").addEventListener("click", function () {
    document.getElementById("forgot-password-overlay").style.display = "none"; // Ẩn modal khi click vào nút "X"
});

// Xử lý form Forgot Password
document.getElementById("forgot-password-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("forgot-email").value;
    alert(`Password reset instructions will be sent to ${email}.`);
    document.getElementById("forgot-password-overlay").style.display = "none"; // Ẩn modal sau khi gửi
});

// Đảm bảo modal ẩn khi tải trang
window.onload = function () {
    document.getElementById('signup-overlay').style.display = 'none';
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('forgot-password-overlay').style.display = 'none';
};
// Chuyển từ Forgot Password về Login khi nhấn vào "Log in"
document.getElementById('forgot-login-link').addEventListener('click', function () {
    document.getElementById('forgot-password-overlay').style.display = 'none'; // Ẩn Forgot Password modal
    document.getElementById('login-overlay').style.display = 'block'; // Hiển thị Login modal
});
document.getElementById('login-link').addEventListener('click', function () {
    document.getElementById('login-overlay').classList.add('show');
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('login-overlay').classList.remove('show');
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.btn-start-now').addEventListener('click', function () {
      document.getElementById('login-overlay').style.display = 'block';
  });
});

  // Close login modal
  document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('login-overlay').style.display = 'none';
  });
  

  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  } else {
    console.error('Hamburger button or navigation menu not found!');
  }

