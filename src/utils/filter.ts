import database from "./database";
import { ISites } from "../interfaces/database";

export default function filterData() {
  const sitesByCategory = (category: string) => {
    let filtered: ISites[] = [];

    // Se tiver categoria filtrar por ela
    if (category) {
      filtered = database.filter((item: any) => item.name === category)[0]
        ?.sites;
      return filtered || [];
    }

    // Se não tiver categoria ativa, retorna todos favs
    database.map(
      (categoria: any) => (filtered = [...filtered, ...categoria.sites])
    );
    return filtered;
  };

  const sitesBySearch = (value: string, category: string) => {
    let filtered: ISites[] = [];
    let sites: ISites[] = [];

    if (category) {
      sites = database.filter((item: any) => item.name === category)[0].sites;
    } else {
      database.map(
        (categoria: any) => (sites = [...sites, ...categoria.sites])
      );
    }

    filtered = sites.filter((site) =>
      site.name.toLowerCase().includes(value.toLowerCase())
    );

    return filtered;
  };

  return { sitesByCategory, sitesBySearch };
}
