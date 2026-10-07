export default function Welcome({ totalDocentes, onNavigate }) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body p-5">
              <h1 className="card-title mb-4">Bem-vindo ao Sistema de Docentes</h1>
              <p className="card-text">
                Este sistema permite gerenciar o cadastro de docentes da instituição.
              </p>

              <div className="alert alert-info mt-4">
                <strong>Total de docentes cadastrados:</strong> {totalDocentes}
              </div>

              <div className="d-grid gap-2 mt-4">
                <button className="btn btn-primary" onClick={() => onNavigate('form')}>
                   Cadastrar Novo Docente
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('list')}>
                   Ver Lista de Docentes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
