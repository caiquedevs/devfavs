import React, { ReactElement } from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import colors from "../../styles/colors";

import { Nav } from "./styled";

export default function Navbar(): ReactElement {
  const handleChangeFile = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { files }: any = e.target;

    function replaceHtml(html: any) {
      html = html.replace(/<p>/gi, "");
      html = html.replace(/<P>/gi, "");
      html = html.replace(/<dt>/gi, "");
      html = html.replaceAll(
        "<H3 ",
        "</ul><ul><H3 "
      );
      html = html.replaceAll("<DL>", "");
      html = html.replaceAll("</DL>", "");

      // Converte a leitura do HTML para HTML
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(
        html,
        "text/html"
      );

      // Remove o subTítulo da lista
      const firstH3: any =
        htmlDoc.querySelector("h3");
      firstH3.parentNode.removeChild(firstH3);

      // Remove o título da lista
      const firstH1: any =
        htmlDoc.querySelector("h1");
      firstH1.parentNode.removeChild(firstH1);

      // Remove o UL que esta vazio na lista
      const firstUl: any =
        htmlDoc.querySelector("ul");
      firstUl.parentNode.removeChild(firstUl);

      // Copia as UL'S e transforma em ARRAY
      const htmlUl =
        htmlDoc.getElementsByTagName("ul");
      var categories = Array.from(htmlUl);

      let byCategories: any = [];

      categories.map((ul, index) => {
        // Pega o nome da categoria
        let name =
          categories[index].getElementsByTagName(
            "h3"
          )[0].innerHTML;

        // Copia os itens da lista e transforma em ARRAY
        let linkElements =
          categories[index].getElementsByTagName(
            "a"
          );
        var copyLinkElements =
          Array.from(linkElements);

        const sites: any[] = [];

        // Popula a variavel de sites
        copyLinkElements.map((site) => {
          sites.push({
            url: site.href,
            icon:
              site.attributes[2]?.nodeValue || "",
            name: site.innerHTML,
          });

          return site;
        });

        // Adiciona o nome da categoria e os sites populados anteriormente
        byCategories.push({
          name,
          sites,
        });

        return ul;
      });

      return byCategories;
    }

    var reader = new FileReader();
    reader.readAsText(files[0], "UTF-8");

    reader.onload = function (evt: any) {
      const data = replaceHtml(evt.target.result);
      localStorage.setItem(
        "devfavs",
        JSON.stringify(data)
      );
      window.location.reload();
    };

    reader.onerror = function (evt) {
      console.error(
        "An error ocurred reading the file",
        evt
      );
    };
  };

  return (
    <Nav>
      <label htmlFor="file">
        <input
          type="file"
          name="file"
          id="file"
          onChange={handleChangeFile}
        />
        <BsPlusSquareFill fill={colors.orange} />
      </label>
    </Nav>
  );
}
