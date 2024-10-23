const express = require("express");
const jwt=require("jsonwebtoken");

const user={"name":"harish","city":"hyd"};

const jwt_secret_key="koldbcj129";

const encoded_string=jwt.sign(user,jwt_secret_key);

console.log(encoded_string);// encoding the input value into a token


const jwt_decode=jwt.verify(encoded_string,jwt_secret_key)

console.log(jwt_decode)
