let database: any = JSON.parse(localStorage.getItem("devfavs")!);
export default database || [];
