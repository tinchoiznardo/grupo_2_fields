
INSERT INTO product_categories (type) VALUES
('fields'),('walkers');

INSERT INTO sizes (size) VALUES
('S'),('M'),('L'),('XL');

INSERT INTO colors (color) VALUES
('azul'),('negro'),('bordo'),('tostada'),('flores'),('night');

INSERT INTO products (price,stock,name,size_id,color_id,category_id,description,image,highlighted) VALUES
(1150,2,'bordo floreada',2,3,1,"alto pantalon","/images/products/fields1.jpg",1),
(1150,2,'negra floreada',4,2,1,"alto pantalon","/images/products/fields2.jpg",0),
(650,5,'walkers flores',2,5,2,"altas llantas","/images/products/fieldsB.jpg",1),
(650,4,'walkers nigthth',1,6,2,"altas llantas","/images/products/fieldsW.jpg",0);

INSERT INTO carts (total) VALUES
("650"),("1300");

INSERT INTO product_cart (product_id,cart_id,quantity) VALUES
(1,1,3);

INSERT INTO user_categories (type) VALUES
('admin'),('user');

INSERT INTO users (first_name,last_name,mail,adress,password,avatar,cart_id,phone,category_id) VALUES
("santiago","Rodriguez",'santirodriguezsalinas@gmail.com',"123 bulnes","asd","/images/users/avatar-1592089529345.png",1,12345678,1),
("tincho","iznardo",'tinchoiznardo@gmail.com',"1234 bulnes","12344","/images/users/avatar-1592091006142.jpg",2,12345678,2);


