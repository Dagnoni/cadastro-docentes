import { useState, useEffect } from 'react';

const ESTADOS = ['', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

export default function DocenteForm({ docenteToEdit, onSave, onCancel }) {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [formacao, setFormacao] = useState('');
  const [emailInstitucional, setEmailInstitucional] = useState('');
  const [emailParticular, setEmailParticular] = useState('');
  const [telefoneCelular, setTelefoneCelular] = useState('');
  const [enderecoResidencial, setEnderecoResidencial] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (docenteToEdit) {
      setNomeCompleto(docenteToEdit.nomeCompleto);
      setCpf(docenteToEdit.cpf);
      setFormacao(docenteToEdit.formacao);
      setEmailInstitucional(docenteToEdit.emailInstitucional);
      setEmailParticular(docenteToEdit.emailParticular);
      setTelefoneCelular(docenteToEdit.telefoneCelular);
      setEnderecoResidencial(docenteToEdit.enderecoResidencial);
      setNumero(docenteToEdit.numero);
      setCidade(docenteToEdit.cidade);
      setCep(docenteToEdit.cep);
      setUf(docenteToEdit.uf);
    }
  }, [docenteToEdit]);

  function formatarCPF(valor) {
    return valor.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  function formatarTelefone(valor) {
    return valor.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  function formatarCEP(valor) {
    return valor.replace(/\D/g, '').replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  function validarFormulario() {
    const novosErros = {};

    if (nomeCompleto.trim().length < 3) {
      novosErros.nomeCompleto = 'Nome precisa ter no mínimo 3 caracteres';
    }

    if (!cpf || cpf.replace(/\D/g, '').length !== 11) {
      novosErros.cpf = 'CPF inválido';
    }

    if (!formacao.trim()) {
      novosErros.formacao = 'Formação é obrigatória';
    }

    if (!emailInstitucional || !emailInstitucional.includes('@')) {
      novosErros.emailInstitucional = 'E-mail institucional inválido';
    }

    if (emailParticular && !emailParticular.includes('@')) {
      novosErros.emailParticular = 'E-mail particular inválido';
    }

    if (!telefoneCelular || telefoneCelular.replace(/\D/g, '').length !== 11) {
      novosErros.telefoneCelular = 'Telefone inválido';
    }

    if (!enderecoResidencial.trim()) {
      novosErros.enderecoResidencial = 'Endereço é obrigatório';
    }

    if (!numero.toString().trim()) {
      novosErros.numero = 'Número é obrigatório';
    }

    if (!cidade.trim()) {
      novosErros.cidade = 'Cidade é obrigatória';
    }

    if (!cep || cep.replace(/\D/g, '').length !== 8) {
      novosErros.cep = 'CEP inválido';
    }

    if (!uf) {
      novosErros.uf = 'Selecione um estado';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    const novoDocente = {
      id: docenteToEdit?.id || Date.now(),
      nomeCompleto,
      cpf,
      formacao,
      emailInstitucional,
      emailParticular,
      telefoneCelular,
      enderecoResidencial,
      numero,
      cidade,
      cep,
      uf,
    };

    onSave(novoDocente);
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body p-4">
              <h3 className="card-title mb-4">
                {docenteToEdit ? 'Alterar Docente' : 'Cadastrar Novo Docente'}
              </h3>

              <form onSubmit={handleSubmit}>
                {/* Dados Pessoais */}
                <h5 className="mt-4 mb-3 border-bottom pb-2">Dados Pessoais</h5>

                <div className="mb-3">
                  <label htmlFor="nomeCompleto" className="form-label">
                    Nome Completo *
                  </label>
                  <input
                    id="nomeCompleto"
                    type="text"
                    className={`form-control ${erros.nomeCompleto ? 'is-invalid' : ''}`}
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                    placeholder="João da Silva"
                  />
                  {erros.nomeCompleto && <div className="invalid-feedback">{erros.nomeCompleto}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="cpf" className="form-label">
                    CPF *
                  </label>
                  <input
                    id="cpf"
                    type="text"
                    className={`form-control ${erros.cpf ? 'is-invalid' : ''}`}
                    value={cpf}
                    onChange={(e) => setCpf(formatarCPF(e.target.value))}
                    placeholder="000.000.000-00"
                    maxLength="14"
                  />
                  {erros.cpf && <div className="invalid-feedback">{erros.cpf}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="formacao" className="form-label">
                    Formação/Área de Atuação *
                  </label>
                  <input
                    id="formacao"
                    type="text"
                    className={`form-control ${erros.formacao ? 'is-invalid' : ''}`}
                    value={formacao}
                    onChange={(e) => setFormacao(e.target.value)}
                    placeholder="Ex: Mestre em Engenharia de Software"
                  />
                  {erros.formacao && <div className="invalid-feedback">{erros.formacao}</div>}
                </div>

                {/* Contatos */}
                <h5 className="mt-4 mb-3 border-bottom pb-2">Contatos</h5>

                <div className="mb-3">
                  <label htmlFor="emailInstitucional" className="form-label">
                    Email Institucional *
                  </label>
                  <input
                    id="emailInstitucional"
                    type="email"
                    className={`form-control ${erros.emailInstitucional ? 'is-invalid' : ''}`}
                    value={emailInstitucional}
                    onChange={(e) => setEmailInstitucional(e.target.value)}
                    placeholder="docente@instituicao.com"
                  />
                  {erros.emailInstitucional && <div className="invalid-feedback">{erros.emailInstitucional}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="emailParticular" className="form-label">
                    Email Particular
                  </label>
                  <input
                    id="emailParticular"
                    type="email"
                    className={`form-control ${erros.emailParticular ? 'is-invalid' : ''}`}
                    value={emailParticular}
                    onChange={(e) => setEmailParticular(e.target.value)}
                    placeholder="docente@email.com"
                  />
                  {erros.emailParticular && <div className="invalid-feedback">{erros.emailParticular}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="telefoneCelular" className="form-label">
                    Telefone Celular *
                  </label>
                  <input
                    id="telefoneCelular"
                    type="tel"
                    className={`form-control ${erros.telefoneCelular ? 'is-invalid' : ''}`}
                    value={telefoneCelular}
                    onChange={(e) => setTelefoneCelular(formatarTelefone(e.target.value))}
                    placeholder="(00) 00000-0000"
                    maxLength="15"
                  />
                  {erros.telefoneCelular && <div className="invalid-feedback">{erros.telefoneCelular}</div>}
                </div>

                {/* Endereço */}
                <h5 className="mt-4 mb-3 border-bottom pb-2">Endereço</h5>

                <div className="mb-3">
                  <label htmlFor="enderecoResidencial" className="form-label">
                    Endereço Residencial *
                  </label>
                  <input
                    id="enderecoResidencial"
                    type="text"
                    className={`form-control ${erros.enderecoResidencial ? 'is-invalid' : ''}`}
                    value={enderecoResidencial}
                    onChange={(e) => setEnderecoResidencial(e.target.value)}
                    placeholder="Rua da Silva"
                  />
                  {erros.enderecoResidencial && <div className="invalid-feedback">{erros.enderecoResidencial}</div>}
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="numero" className="form-label">
                      Número *
                    </label>
                    <input
                      id="numero"
                      type="text"
                      className={`form-control ${erros.numero ? 'is-invalid' : ''}`}
                      value={numero}
                      onChange={(e) => setNumero(e.target.value)}
                      placeholder="123"
                    />
                    {erros.numero && <div className="invalid-feedback">{erros.numero}</div>}
                  </div>

                  <div className="col-md-8 mb-3">
                    <label htmlFor="cidade" className="form-label">
                      Cidade *
                    </label>
                    <input
                      id="cidade"
                      type="text"
                      className={`form-control ${erros.cidade ? 'is-invalid' : ''}`}
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                      placeholder="São Paulo"
                    />
                    {erros.cidade && <div className="invalid-feedback">{erros.cidade}</div>}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cep" className="form-label">
                      CEP *
                    </label>
                    <input
                      id="cep"
                      type="text"
                      className={`form-control ${erros.cep ? 'is-invalid' : ''}`}
                      value={cep}
                      onChange={(e) => setCep(formatarCEP(e.target.value))}
                      placeholder="00000-000"
                      maxLength="9"
                    />
                    {erros.cep && <div className="invalid-feedback">{erros.cep}</div>}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="uf" className="form-label">
                      Estado (UF) *
                    </label>
                    <select
                      id="uf"
                      className={`form-select ${erros.uf ? 'is-invalid' : ''}`}
                      value={uf}
                      onChange={(e) => setUf(e.target.value)}
                    >
                      {ESTADOS.map((estado) => (
                        <option key={estado || 'vazio'} value={estado}>
                          {estado || 'Selecione...'}
                        </option>
                      ))}
                    </select>
                    {erros.uf && <div className="invalid-feedback">{erros.uf}</div>}
                  </div>
                </div>

                {/* Botões */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                  <button type="button" className="btn btn-secondary" onClick={onCancel}>
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {docenteToEdit ? 'Atualizar' : 'Cadastrar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
