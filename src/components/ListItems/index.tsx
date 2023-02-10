/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { ReactElement, useEffect, useState, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { ISites } from "../../interfaces/database";

import { Container } from "./styled";

import useQuery from "../../hooks/useQuery";
import filterData from "../../utils/filter";

const renderRows = (site: any, index: number) => (
  <li key={index}>
    <a href={site.url} target="_blank">
      <figure>
        <img src={site.icon || "/images/default.svg"} alt="site icon" />
        <figcaption>{site.name}</figcaption>
      </figure>
    </a>
  </li>
);

export default function ListItems(): ReactElement {
  const query = useQuery();
  const inputRef = useRef<any>(null);
  const { sitesByCategory, sitesBySearch } = filterData();

  const category = query.get("category");

  const [sites, setSites] = useState<ISites[]>([]);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleClickSearch = () => {
    setShowSearch(!showSearch);
    inputRef.current.focus();
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);

    const filtered = sitesBySearch(value, category!);
    setSites(filtered);
  };

  useEffect(() => {
    const filtered = sitesByCategory(category!);
    setSites(filtered);
  }, [category]);

  return (
    <Container showSearch={showSearch}>
      <div className="title-group">
        <h1>{category ? category : `Todos favoritos - ${sites.length}`}</h1>

        <div>
          <input
            placeholder={showSearch ? "Pesquisar favorito" : ""}
            onChange={handleChangeSearch}
            value={searchValue}
            type="text"
            name="search"
            id="search"
            ref={inputRef}
          />

          <button onClick={handleClickSearch} className="default" type="button">
            <BiSearchAlt size="30px" />
          </button>
        </div>
      </div>

      <ul>{sites.map((site, index) => renderRows(site, index))}</ul>
    </Container>
  );
}
