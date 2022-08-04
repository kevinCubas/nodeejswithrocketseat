import express from 'express';

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const items = [
    {
      title: "D", 
      message: "esenvolver aplicações/serviços de forma fácil"
    },
    {
      title: "E", 
      message: "JS usa Javascript para renderizar HTML"
    },
    {
      title: "M", 
      message: "uito fácil de usar"
    },
    {
      title: "A", 
      message: "morzinho"
    },
    {
      title: "I", 
      message: "nstall EJS"
    },
    {
      title: "S", 
      message: "yntaxe fácil"
    }
];
  const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando Javascript"
  res.render("pages/index", {
    qualities: items,
    subtitle
  }); 
});


app.get("/sobre", (req, res) => {
  res.render("pages/about");
});

app.listen(8080, () => {
  console.log("Rodando")
});