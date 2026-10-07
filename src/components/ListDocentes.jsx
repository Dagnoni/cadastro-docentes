export default function ListDocentes({ docentes, onEdit, onDelete }) {
  return (
    <div className="container mt-4">
      {docentes.length === 0 ? (
        <div className="alert alert-info text-center">
          <p>Nenhum docente cadastrado ainda.</p>
          <p className="mb-0">Clique em "Cadastrar" para adicionar um novo docente.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Nome</th>
                <th>Formação</th>
                <th>Email Institucional</th>
                <th className="text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {docentes.map((docente) => (
                <tr key={docente.id}>
                  <td>{docente.nomeCompleto}</td>
                  <td>{docente.formacao}</td>
                  <td>{docente.emailInstitucional}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => onEdit(docente)}
                    >
                      Alterar
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        if (window.confirm(`Deseja remover ${docente.nomeCompleto}?`)) {
                          onDelete(docente.id);
                        }
                      }}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
