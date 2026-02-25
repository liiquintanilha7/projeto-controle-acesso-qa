const listaBloqueio = ["Carlos", "Fernanda"];

function verificarAcesso(funcionario) {

    const cargosPermitidos = [
        "Técnico de Infraestrutura",
        "Administrador de Sistemas"
    ];

    if (!cargosPermitidos.includes(funcionario.cargo)) {
        return `Acesso negado para ${funcionario.nome}: Cargo não autorizado`;
    }

    if (funcionario.horario < 7 || funcionario.horario > 19) {
        return `Acesso negado para ${funcionario.nome}: Fora do horário permitido`;
    }

    if (listaBloqueio.includes(funcionario.nome)) {
        return `Acesso negado para ${funcionario.nome}: Funcionário bloqueado`;
    }

    return `Acesso concedido para ${funcionario.nome}`;
}

module.exports = verificarAcesso;

