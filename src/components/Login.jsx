export default function Login({ onLogin }) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body p-5">
              <h1 className="card-title text-center mb-4">Cadastro de Docentes</h1>
              <p className="text-muted text-center mb-4">Sistema de gerenciamento de professores</p>
              <button className="btn btn-primary w-100" onClick={onLogin}>
                Fazer Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
