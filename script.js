// 当用户滚动时，可以添加一些动画效果
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// 初始化时设置一些动画属性
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    });
    
    // 触发滚动事件以显示初始可见的部分
    window.dispatchEvent(new Event('scroll'));
    
    // 可以添加打印按钮
    const printButton = document.createElement('button');
    printButton.textContent = '打印简历';
    printButton.className = 'print-button';
    printButton.addEventListener('click', function() {
        window.print();
    });
    document.body.appendChild(printButton);
});