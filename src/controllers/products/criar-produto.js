const User = require('../../models/products-model');
class CriarProdutoController {

    /**
   * @param {HttpRequest} request - Objeto da requisição HTTP
   * @returns {Promise<HttpResponse>}
   */
    async handle(httpRequest) {
        try {
            const { nome, quant, preco, descricao } = httpRequest.body;

            const usuario = await User.create(
                {
                    nome,
                    quant,
                    preco,
                    descricao
                }
            );

            return {
                statusCode: 201,
                body: usuario,
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: { error: error.message }, 
            };
        }
    }
}

module.exports = CriarProdutoController;