const verificarAcesso = require('../src/acessoSala');

describe("Sistema de controle de acesso", () => {

    test("Deve permitir acesso válido", () => {

        const funcionario = {
            nome: "João",
            cargo: "Administrador de Sistemas",
            horario: 10
        };

        expect(verificarAcesso(funcionario))
        .toContain("Acesso concedido");

    });

    test("Deve negar cargo inválido", () => {

        const funcionario = {
            nome: "Pedro",
            cargo: "Estagiário",
            horario: 10
        };

        expect(verificarAcesso(funcionario))
        .toContain("Cargo não autorizado");

    });

    test("Deve negar funcionário bloqueado", () => {

        const funcionario = {
            nome: "Carlos",
            cargo: "Técnico de Infraestrutura",
            horario: 10
        };

        expect(verificarAcesso(funcionario))
        .toContain("Funcionário bloqueado");

    });

    test("Teste de fronteira: permitir às 7h", () => {

        const funcionario = {
            nome: "Ana",
            cargo: "Administrador de Sistemas",
            horario: 7
        };

        expect(verificarAcesso(funcionario))
        .toContain("Acesso concedido");

    });

    test("Teste de fronteira: negar às 20h", () => {

        const funcionario = {
            nome: "Lucas",
            cargo: "Administrador de Sistemas",
            horario: 20
        };

        expect(verificarAcesso(funcionario))
        .toContain("Fora do horário permitido");

    });

});
