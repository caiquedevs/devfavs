const renderImage = (value: string) => {
  const images: any = {
    c: "/images/c++.svg",
    git: "/images/git.svg",
    css: "/images/css.svg",
    html: "/images/html.svg",
    apis: "/images/apis.svg",
    expo: "/images/expo.svg",
    libs: "/images/libs.svg",
    node: "/images/node.svg",
    figma: "/images/figma.svg",
    mysql: "/images/mysql.svg",
    linux: "/images/linux.svg",
    react: "/images/react.svg",
    jquery: "/images/jquery.svg",
    csharp: "/images/c++.svg",
    outros: "/images/outros.svg",
    vscode: "/images/vscode.svg",
    angular: "/images/javascript.svg",
    imagens: "/images/imagens.svg",
    modalgr: "/images/modalgr.svg",
    defaultImg: "/images/default.svg",
    javascript: "/images/javascript.svg",
    reactnative: "/images/react.svg",
  };

  return images[value.toLowerCase().replace(" ", "")];
};

export default renderImage;
