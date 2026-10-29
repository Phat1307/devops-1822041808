# DevOps CI/CD Demo với GitHub Actions

- **Sinh viên:** Nguyễn Minh Phát
- **MSSV:** 1822041808
- **Repository:** `devops-1822041808`
- **GitHub Pages:** `https://<username>.github.io/devops-1822041808/`

## Cấu trúc thư mục
- `index.html`: Giao diện chính chứa họ tên và MSSV.
- `style.css`: Giao diện CSS hiện đại, trực quan.
- `script.js`: Xử lý tương tác phía client.
- `.github/workflows/deploy.yml`: Pipeline CI/CD gồm 2 job:
  - `check`: Kiểm tra đủ 3 file và thẻ `<title>`.
  - `deploy`: Tự động deploy lên GitHub Pages sau khi pass `check`.

