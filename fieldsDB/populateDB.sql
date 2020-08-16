INSERT INTO product_categories (type) VALUES
('fields'),('walkers');

INSERT INTO sizes (size) VALUES
('S'),('M'),('L'),('XL');

INSERT INTO colors (color) VALUES
('Azul'),('Negro'),('Bordo'),('Tostada'),('Flores'),('Night');

INSERT INTO products (price,stock,name,size_id,color_id,category_id,description,image,highlighted) VALUES
(1150,2,'Azul Camo',2,3,1,"Nuestras Fields Classics en color azul con detalles camuflajeados","/images/products/fields1.jpg",1),
(1150,5,'Azul Zig-Zag',2,5,2,"Nuestras Fields Classics en color azul con detalles en zig-zag","/images/products/fields7.jpg",1),
(1150,2,'Bordo Floreada',2,3,1,"Nuestras Fields Classics en color bordo con detalles floreados","/images/products/fields8.jpg",1),
(1150,2,'Bordo Pluma',2,3,1,"Nuestras Fields Classics en color bordo con detalles de plumas","/images/products/fields3.jpg",1),
(1150,2,'Negra Floreada',4,2,1,"Nuestras Fields Classics en color negro con detalles floreados","/images/products/fields9.jpg",0),
(1150,2,'Negra Azteca',4,2,1,"Nuestras Fields Classics en color negro con detalles aztecas","/images/products/fields4.jpg",0),
(1150,4,'Tostada Floreada',1,6,2,"Nuestras Fields Classics en color marron tostado con detalles floreados","/images/products/fields5.jpg",0),
(1140,4,'Tostada Geometrica',1,6,2,"Nuestras Fields Classics en color marron tostado con detalles geometricos","/images/products/fields2.jpg",0),
(650,5,'Walkers Flowers',2,5,2,"Nuestras Walkers blancas con detalles floreados","/images/products/fieldsW.jpg",1),

INSERT INTO carts (total) VALUES
("650"),("1300");

INSERT INTO product_cart (product_id,cart_id,quantity) VALUES
(1,1,3);

INSERT INTO user_categories (type) VALUES
('admin'),('user');

INSERT INTO users (first_name,last_name,mail,adress,password,avatar,cart_id,phone,category_id) VALUES
("santiago","Rodriguez",'santirodriguezsalinas@gmail.com',"123 bulnes","$2b$10$jkVENGwUAlJlvTFyjat06eIw4HgEunfop9zpaal9UgXjhvRQoynwq","/images/users/avatar-1592089529345.png",1,12345678,1),
("tincho","iznardo",'tinchoiznardo@gmail.com',"1234 bulnes","12344","/images/users/avatar-1592091006142.jpg",2,12345678,2);



