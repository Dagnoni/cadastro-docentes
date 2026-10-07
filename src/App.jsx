import { useState } from 'react';
import Login from './components/Login';
import Menu from './components/Menu';
import Welcome from './components/Welcome';
import DocenteForm from './components/DocenteForm';
import ListDocentes from './components/ListDocentes';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState('welcome');
  const [docentes, setDocentes] = useState([]);
  const [docenteToEdit, setDocenteToEdit] = useState(null);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setActiveScreen('welcome');
    setDocenteToEdit(null);
  }

  function handleNavigate(screen) {
    setActiveScreen(screen);
    if (screen === 'form') {
      setDocenteToEdit(null);
    }
  }

  function handleSaveDocente(docente) {
    if (docenteToEdit) {
      // UPDATE
      setDocentes(
        docentes.map((d) => (d.id === docente.id ? docente : d))
      );
    } else {
      // CREATE
      setDocentes([...docentes, docente]);
    }

    setDocenteToEdit(null);
    setActiveScreen('list');
  }

  function handleEditDocente(docente) {
    setDocenteToEdit(docente);
    setActiveScreen('form');
  }

  function handleDeleteDocente(id) {
    // DELETE com filter
    setDocentes(docentes.filter((d) => d.id !== id));
  }

  function handleCancelForm() {
    setDocenteToEdit(null);
    setActiveScreen('list');
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <Menu activeScreen={activeScreen} onNavigate={handleNavigate} onLogout={handleLogout} />

      {activeScreen === 'welcome' && (
        <Welcome totalDocentes={docentes.length} onNavigate={handleNavigate} />
      )}

      {activeScreen === 'form' && (
        <DocenteForm
          docenteToEdit={docenteToEdit}
          onSave={handleSaveDocente}
          onCancel={handleCancelForm}
        />
      )}

      {activeScreen === 'list' && (
        <ListDocentes
          docentes={docentes}
          onEdit={handleEditDocente}
          onDelete={handleDeleteDocente}
        />
      )}
    </div>
  );
}
