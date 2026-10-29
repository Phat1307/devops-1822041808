document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnAction');
    const msg = document.getElementById('msgResponse');

    if (btn && msg) {
        btn.addEventListener('click', () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('vi-VN');
            msg.textContent = `Xin chào Nguyễn Minh Phát (MSSV: 1822041808)! JavaScript hoạt động tốt lúc ${timeStr}.`;
        });
    }
});

