INSERT INTO product_categories (type) VALUES
('fields'),('walkers');
INSERT INTO sizes (size) VALUES
('S'),('M'),('L');
INSERT INTO products (price,name,category_id,description,image,highlighted) VALUES
(1150,'Azul Camo',1,"Nuestras Fields Classics en color azul con detalles camuflajeados","/images/products/fields1.jpg",1),
(1150,'Azul Zig-Zag',1,"Nuestras Fields Classics en color azul con detalles en zig-zag","/images/products/fields7.jpg",0),
(1150,'Bordo Floreada',1,"Nuestras Fields Classics en color bordo con detalles floreados","/images/products/fields8.jpg",1),
(1150,'Bordo Pluma',1,"Nuestras Fields Classics en color bordo con detalles de plumas","/images/products/fields3.jpg",0),
(1150,'Negra Floreada',1,"Nuestras Fields Classics en color negro con detalles floreados","/images/products/fields9.jpg",0),
(1150,'Negra Azteca',1,"Nuestras Fields Classics en color negro con detalles aztecas","/images/products/fields4.jpg",0),
(1150,'Tostada Floreada',1,"Nuestras Fields Classics en color marron tostado con detalles floreados","/images/products/fields5.jpg",1),
(1140,'Tostada Geometrica',1,"Nuestras Fields Classics en color marron tostado con detalles geometricos","/images/products/fields2.jpg",0),
(650,'Walkers Flowers',2,"Nuestras Walkers blancas con detalles floreados","/images/products/fieldsW.jpg",1),
(650,'Walkers Night',2,"Nuestras Walkers Negras con detalles aztecas","/images/products/fieldsB.jpg",0);
INSERT INTO product_size (size_id,stock,product_id) VALUES
(2,1,1),(2,2,2),(1,1,3),(3,3,4),(2,4,5),(1,1,6), (2,1,7),(2,2,8),(3,3,9),(2,4,10);
INSERT INTO carts (total) VALUES
("650"),("1300");
INSERT INTO product_cart (product_id,cart_id,quantity,size_id) VALUES
(1,1,3,2);
INSERT INTO user_categories (type) VALUES
('admin'),('user');
INSERT INTO users (first_name,last_name,mail,adress,password,avatar,cart_id,phone,category_id) VALUES
("santiago","Rodriguez",'santirodriguezsalinas@gmail.com',"123 bulnes","asd","/images/users/avatar-1592089529345.png",1,12345678,1),
("tincho","iznardo",'tinchoiznardo@hotmail.com',"1234 bulnes","123456","/images/users/avatar-1592091006142.jpg",2,12345678,2);

select * from products