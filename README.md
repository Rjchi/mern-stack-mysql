# mern-stack-mysql
Crud utilizando el stack MERN con MSQL

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- Table:
  CREATE TABLE tasks (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(200) NOT NULL,
  description varchar(300),
  done tinyint(1) NOT NULL DEFAULT 0,
  createAt timestamp NOT NULL DEFAULT current_timestamp()
);
