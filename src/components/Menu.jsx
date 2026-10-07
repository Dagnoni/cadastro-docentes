export default function Menu({ activeScreen, onNavigate, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Docentes</span>
        <div className="navbar-nav ms-auto gap-2">
          <button
            className={`btn btn-sm ${activeScreen === 'welcome' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => onNavigate('welcome')}
          >
            Início
          </button>
          <button
            className={`btn btn-sm ${activeScreen === 'form' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => onNavigate('form')}
          >
            Cadastrar
          </button>
          <button
            className={`btn btn-sm ${activeScreen === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => onNavigate('list')}
          >
            Listar
          </button>
          <button className="btn btn-sm btn-danger" onClick={onLogout}>
            Sair
          </button>
        </div>
      </div>
    </nav>
  );
}
