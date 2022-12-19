# category

- tshirts
- mentrousers
- shoes
- sweaters
- mensblazers

# pagination

- page
- limit
- EX: mens/category/?page=1&limit=10

# Brands

- IVOC
- Roadster
- ADIDAS
- KRA
- WROGN
- Provogue
- DENNISION

- Sorting

- mens?sort=asc
- mens?sort=des


# Cart
- GET -Get list of all cart items - (/cart)
- POST -Post add product to the cart -(/cart) - token,userid,productid
- GET -single user product - (/user/products) - token
- DELETE -delete product from the cart - (/) -cart id
- DELETE -delete products from the cart when user placed order - (/orders) -token
# URL 
- http://localhost:8080/mens
- https://myntra.cyclic.app/mens
- Ex: https://myntra.cyclic.app/mens?category=tshirts&page=1&limit=10