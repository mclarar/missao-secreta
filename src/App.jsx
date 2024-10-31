import { useState } from "react";
import { Modal } from "./components/Modal";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(
    !localStorage.getItem("missionAccepted")
  );

  const handleAcceptMission = () => {
    setShowModal(false);
    localStorage.setItem("missionAccepted", "true");
  };
  return (
    <>
      <div className="container">
        {showModal && <Modal onAccept={handleAcceptMission} />}
        {!showModal && (
          <main>
            <h1 className="bem-vindo">Bem-vindo, estudante!</h1>
            <h2 className="missao-start">Aqui começa sua missão.</h2>

            <section>
              <h1 className="titulo-missao">Missão: E-Commerce React</h1>
              <h2 className="subtitulos">Alvos Principais</h2>
              <ol>
                <li>
                  <h3 className="etapas">Tela Inicial (Base de Lançamento)</h3>
                  <p>
                    <strong>Missão:</strong> Exibir produtos disponíveis para
                    compra, organizados em uma grade visual.
                  </p>
                  <p>
                    <strong>Detalhes:</strong> Cada produto deve revelar imagem,
                    nome, descrição breve e preço. Um botão de adição deve estar
                    disponível para enviar o item ao "Carregamento de Recursos"
                    (carrinho).
                  </p>
                </li>
                <li>
                  <h3 className="etapas">
                    Tela Sobre (Arquivo Confidencial do Time)
                  </h3>
                  <p>
                    <strong>Missão:</strong> Fornecer informações confidenciais
                    sobre os agentes (desenvolvedores) da equipe.
                  </p>
                  <p>
                    <strong>Detalhes:</strong> Cada membro deve apresentar uma
                    foto e um resumo sobre suas habilidades e expertise.
                  </p>
                </li>
                <li>
                  <h3 className="etapas">
                    Tela do Carrinho (Centro de Operações de Compras)
                  </h3>
                  <p>
                    <strong>Missão:</strong> Implementar um sistema de
                    gerenciamento de itens adicionados ao carrinho.
                  </p>
                  <p>
                    <strong>Recursos:</strong> Utilizar Context API para um
                    controle estratégico do estado global.
                  </p>
                  <p>
                    <strong>Exibir:</strong> Número total de itens e valor total
                    da operação de compra.
                  </p>
                </li>
                <li>
                  <h3 className="etapas">
                    Tela de Login (Ponto de Acesso Restrito)
                  </h3>
                  <p>
                    <strong>Missão:</strong> Proteger o e-commerce com um
                    formulário de autenticação para agentes (usuários)
                    cadastrados.
                  </p>
                  <p>
                    <strong>Desafios:</strong> Campos obrigatórios para e-mail e
                    senha (e-mail contendo “@” e senha não vazia). Opção de
                    log-out para encerrar a sessão segura.
                  </p>
                </li>
                <li>
                  <h3 className="etapas">
                    Tela de Cadastro (Recrutamento de Novos Agentes)
                  </h3>
                  <p>
                    <strong>Missão:</strong> Prover um formulário de cadastro
                    para novos usuários.
                  </p>
                  <p>
                    <strong>Campos obrigatórios:</strong> Nome, e-mail, CPF,
                    telefone, endereço, senha e confirmação de senha.
                  </p>
                  <p>
                    <strong>Desafios:</strong> Validações de campo: CPF com 11
                    dígitos, e-mail válido e confirmação de senha
                    correspondente.
                  </p>
                </li>
              </ol>

              <h2 className="subtitulos">Estilo Camuflado e Atraente</h2>
              <ul>
                <li>
                  <strong>CSS Modules:</strong> Para a maioria dos componentes.
                </li>
                <li>
                  <strong>styled-components:</strong> Em pelo menos um
                  componente, para assegurar versatilidade e camuflagem visual.
                </li>
              </ul>

              <h2 className="subtitulos">Instruções de Execução</h2>
              <ul>
                <li>
                  <strong>Estrutura Tática:</strong> Cada tela deverá ser
                  implementada como um componente React funcional.
                </li>
                <li>
                  <strong>Navegação entre Bases:</strong> Integrar o sistema de
                  navegação utilizando React Router.
                </li>
                <li>
                  <strong>Organização Estratégica:</strong> Dividir os
                  componentes em pastas conforme o treinamento recebido.
                </li>
                <li>
                  <strong>Conexão com o Backend:</strong> Fazer as requisições à
                  API desenvolvida na disciplina de "Desenvolvimento de API
                  Restful".
                </li>
              </ul>

              <h2 className="subtitulos">Entrega da Missão</h2>
              <p>
                <strong>Local de Entrega:</strong> Repositório da missão.
              </p>
              <p>
                <strong>Nota:</strong> Cada agente deve contribuir com pelo
                menos um commit, garantindo assim sua presença na operação.
              </p>
              <p>
                <strong>Prazo Final:</strong> 06/11/2024
              </p>

              <h2 className="subtitulos">Critérios de Sucesso da Missão</h2>
              <ul>
                <li>Implementação completa das funcionalidades requeridas.</li>
                <li>Organização e qualidade do código.</li>
                <li>
                  Uso adequado de tecnologias (React, Context API, CSS Modules,
                  styled-components).
                </li>
                <li>Design eficiente e experiência de usuário adequada.</li>
              </ul>
              <p className="boa-sorte">
                <strong>Boa sorte, Agentes. Cada ponto conta!</strong>
              </p>
            </section>
          </main>
        )}
      </div>
    </>
  );
}

export default App;
