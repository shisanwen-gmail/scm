// script.js
function showSearchBox() {
  var searchBox = document.getElementById('search-box');
  // 获取屏幕的宽度和高度
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  // 设置搜索框的位置在屏幕中央
  searchBox.style.left = (screenWidth - searchBox.offsetWidth) / 2 + 'px';
  searchBox.style.top = (screenHeight - searchBox.offsetHeight) / 2 + 'px';
  searchBox.style.display = 'block';
}

function performSearch() {
  var searchQuery = document.getElementById('search-input').value;
  // 在这里添加搜索逻辑，例如使用AJAX请求发送搜索查询到服务器
  console.log('搜索内容:', searchQuery);
  // 隐藏搜索框
  hideSearchBox();
}

function hideSearchBox() {
  document.getElementById('search-box').style.display = 'none';
}

// 新增函数：跳转到公告页面
function redirectToAnnouncement() {
  // 这里填写您想要跳转的公告页面的 URL
  var announcementUrl = 'https://example.com/announcement';
  window.location.href = announcementUrl; // 跳转到指定的 URL
}