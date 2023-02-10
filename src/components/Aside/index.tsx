import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { AsideBar } from './styled';
import database from '../../utils/database';
import useQuery from '../../hooks/useQuery';

import renderImage from '../../utils/renderImage';
import filter from '../../utils/filter';

export default function Aside(): ReactElement {
  const query = useQuery();
  const category = query.get('category');
  const getFilters = filter();
  const sites = getFilters.sitesByCategory(category!);

  const onSuccess = (event: any) => {
    event.target.style.display = 'flex';
  };

  const onError = (event: any) => {
    event.target.style.display = 'none';
  };

  return (
    <AsideBar>
      <h1>Categorias</h1>

      <ul>
        {database.map((item: any, index: any) => {
          const sites = getFilters.sitesByCategory(item.name);

          if (sites.length === 0) return <></>;

          return (
            <li key={index} className={category === item.name ? 'active' : ''}>
              <Link to={`/?category=${item.name}`}>
                <figure style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      background: '#bdbdbd',
                      borderRadius: 7,
                      color: 'rgba(0,0,0,0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <img src={renderImage(item.name) || ''} alt="icon" onError={onError} onLoad={onSuccess} style={{ position: 'absolute' }} />
                </figure>
                {item.name}
                <span className={category === item.name ? 'active' : ''}>({sites.length})</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </AsideBar>
  );
}
