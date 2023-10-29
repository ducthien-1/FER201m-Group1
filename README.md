# Badminton online shop
Project React App group 1 FER201m FA23

## Cài đặt ban đầu
```bash
npm install 
```

## Các thư viện sử dụng
| Library | Source |
| ------ | ------ |
| Create React App | [link](https://github.com/facebook/create-react-app) |
| React Bootstrap | [link](https://react-bootstrap.netlify.app/) |
| Font Awesome | [link](https://fontawesome.com/v5/docs/web/use-with/react)|
| Axious | [link](https://github.com/axios/axios) |


## Chạy ứng dụng
Để chạy ứng dụng chúng ta cần 2 bước:
1. Chạy Json-server 
2. Chạy ứng dụng React
**Lưu ý**: Json-server và ứng dụng React phải chạy ở port khác nhau

Ở terminal với đường dẫn của project, đầu tiên chạy Json-server: 
```bash
json-server --watch db.json --port 3004
```
Sau đó, bạn mở một terminal mới và nhập:
```bash
npm start 
```
Mở trình duyệt và ở [http://localhost:3000](http://localhost:3000) bạn sẽ thấy trang web đã hoạt động.

## Các đường dẫn
- Customer: http://localhost:3000
- Admin: http://localhost:3000/admin
- Customer-agent: http://localhost:3000/customer-agent
- Delivery-agent: http://localhost:3000/delivery-agent
- Owner: http://localhost:3000/owner

