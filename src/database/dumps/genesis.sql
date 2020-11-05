-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Nov-2020 às 05:41
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `genesis`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `admin_change_issue`
--

CREATE TABLE `admin_change_issue` (
  `id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `issue_deletada` int(11) NOT NULL,
  `issue_editada` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `admin_delete_user`
--

CREATE TABLE `admin_delete_user` (
  `id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `user_deleted` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `admin_logs`
--

CREATE TABLE `admin_logs` (
  `id` int(11) NOT NULL,
  `admin` int(11) NOT NULL,
  `issues_updateds` varchar(255) DEFAULT NULL,
  `lists_updateds` varchar(255) DEFAULT NULL,
  `any_updateds` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `admin_logs`
--

INSERT INTO `admin_logs` (`id`, `admin`, `issues_updateds`, `lists_updateds`, `any_updateds`, `created_at`, `updated_at`) VALUES
(1, 1, 'Adicinou um novo Artigo como destaque', 'Adicinou uma lista como destaque', 'Alterou as permições de um novo usuário', '2020-10-13 12:14:25', '2020-10-18 05:34:45'),
(2, 2, 'Iniciou as atividades', 'Iniciou as atividades', 'Iniciou as atividades', '2020-10-13 12:14:29', '2020-10-13 12:14:29'),
(3, 3, 'Iniciou as atividades', 'Iniciou as atividades', 'Iniciou as atividades', '2020-10-13 12:14:32', '2020-10-13 12:14:32'),
(4, 4, 'Iniciou as atividades', 'Iniciou as atividades', 'Iniciou as atividades', '2020-10-13 16:39:55', '2020-10-13 16:39:55'),
(5, 5, 'Iniciou as atividades', 'Iniciou as atividades', 'Marcou um novo usuário como destaque', '2020-10-13 16:52:27', '2020-10-13 16:54:25');

-- --------------------------------------------------------

--
-- Estrutura da tabela `box`
--

CREATE TABLE `box` (
  `id` int(11) NOT NULL,
  `guest` int(11) NOT NULL,
  `sender` int(11) NOT NULL,
  `now` int(11) NOT NULL,
  `message` text NOT NULL,
  `playlist` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `box`
--

INSERT INTO `box` (`id`, `guest`, `sender`, `now`, `message`, `playlist`, `created_at`, `updated_at`) VALUES
(2, 2, 1, 1, 'vamos comecar', 1, '2020-10-13 12:50:56', '2020-10-13 12:50:56'),
(3, 2, 1, 2, 'ok, let do it', 1, '2020-10-13 12:51:28', '2020-10-13 12:51:28'),
(4, 2, 1, 1, 'cvbfdgbfdgb', 1, '2020-10-13 12:51:46', '2020-10-13 12:51:46'),
(5, 2, 1, 1, 'xcbdb', 1, '2020-10-13 12:51:47', '2020-10-13 12:51:47'),
(6, 2, 1, 1, 'xbxfbd', 1, '2020-10-13 12:51:48', '2020-10-13 12:51:48'),
(7, 2, 1, 1, 'fbxfb', 1, '2020-10-13 12:51:49', '2020-10-13 12:51:49'),
(8, 2, 1, 3, 'cheguei', 1, '2020-10-13 12:54:35', '2020-10-13 12:54:35'),
(10, 3, 1, 1, 'olá', 2, '2020-10-18 05:24:57', '2020-10-18 05:24:57'),
(11, 3, 1, 3, 'VAMOS COMEÇAR', 2, '2020-10-18 05:26:16', '2020-10-18 05:26:16'),
(12, 3, 1, 7, 'OK,  VAMOS', 2, '2020-10-18 05:28:08', '2020-10-18 05:28:08'),
(13, 3, 1, 1, 'OK', 2, '2020-10-19 03:19:21', '2020-10-19 03:19:21'),
(14, 2, 1, 1, 'let', 1, '2020-10-21 17:37:39', '2020-10-21 17:37:39'),
(15, 2, 1, 1, 'testando\n', 1, '2020-11-02 23:12:42', '2020-11-02 23:12:42');

-- --------------------------------------------------------

--
-- Estrutura da tabela `boxs_reports`
--

CREATE TABLE `boxs_reports` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `guest` varchar(255) NOT NULL,
  `playlist` varchar(255) NOT NULL,
  `report` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `boxs_reports`
--

INSERT INTO `boxs_reports` (`id`, `user_id`, `guest`, `playlist`, `report`, `created_at`, `updated_at`) VALUES
(1, 1, 'Linus Torvalds', 'Iniciando com Node.js', 'http://localhost:3337/playlists?watch=1&principal=1&guest=2&box=1', '2020-10-13 12:50:39', '2020-10-13 12:50:39'),
(2, 1, 'eliasallex', 'React.js Iniciando', 'http://localhost:3337/playlists?watch=2&principal=1&guest=3&box=1', '2020-10-18 05:24:41', '2020-10-18 05:24:41');

-- --------------------------------------------------------

--
-- Estrutura da tabela `challenges`
--

CREATE TABLE `challenges` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `issue` int(11) NOT NULL,
  `body` varchar(255) NOT NULL,
  `tips` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `dashboard_excludeds`
--

CREATE TABLE `dashboard_excludeds` (
  `id` int(11) NOT NULL,
  `user_excludeds` int(11) NOT NULL,
  `playlist_excludeds` int(11) NOT NULL,
  `issue_excludeds` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `dashboard_excludeds`
--

INSERT INTO `dashboard_excludeds` (`id`, `user_excludeds`, `playlist_excludeds`, `issue_excludeds`, `created_at`, `updated_at`) VALUES
(1, 0, 0, 0, '2020-10-13 12:09:31', '2020-10-13 12:09:31');

-- --------------------------------------------------------

--
-- Estrutura da tabela `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `stars` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `user_id`, `title`, `message`, `stars`, `created_at`, `updated_at`) VALUES
(1, 2, 'Parabéns', '👏👏👏👏👏👏👏👏\nMuito bem feito.\njá estava na hora de levar a minha carreira para o próximo nível', 10, '2020-10-13 17:03:59', '2020-10-13 17:03:59');

-- --------------------------------------------------------

--
-- Estrutura da tabela `issue`
--

CREATE TABLE `issue` (
  `id` int(11) NOT NULL,
  `owner` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `tags` varchar(255) NOT NULL,
  `language` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `featured` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `issue`
--

INSERT INTO `issue` (`id`, `owner`, `title`, `body`, `tags`, `language`, `link`, `featured`, `created_at`, `updated_at`) VALUES
(1, 1, 'Github', '# Github\n\n> GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando o Git.\n\n- Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.\n\n**GitHub** é amplamente utilizado por programadores para divulgação de seus trabalhos ou para que outros programadores contribuam com o projeto, além de promover fácil comunicação através de recursos que relatam problemas ou mesclam repositórios remotos (issues, pull request).\n\n- **Alguns recursos**\n- [X] Hospedagem de projetos (grátis).\n- [X] proteção dos dados.\n- [X] Controle de versão das dependências nos repositórios (grátis).\n\nO **GitHub** é mundialmente usado e chega a ter mais de 36 milhões de usuários ativos mundialmente contribuindo em projetos comerciais ou pessoais. Alguns deles que são conhecidos mundialmente. WordPress, GNU/Linux, Atom, Electron. GitHub também oferece suporte ao recurso de organizacão que é amplamente utilizado por aqueles que querem uma escala maior para seus projetos. Na maioria das vezes, o recurso é usado por empresas já existentes como a Google, Microsoft e WordPress.\n\n---\n\n# História\n\n- O **GitHub** foi desenvolvido por Chris Wanstrath, J. Hyett, Tom Preston-Werner e Scott Chacon usando Ruby on Rails, e começou em fevereiro de 2008. A empresa, GitHub, Inc., existe desde 2007 e está localizada em São Francisco.\n\n- O sombreamento do mapa ilustra o número de usuários como uma proporção da população da Internet de cada país. Os gráficos circulares que cercam os dois hemisférios descrevem o número total de usuários do GitHub (à esquerda) e comprometem (à direita) por país.\n\n- Em 24 de fevereiro de 2009, os membros da equipe do GitHub anunciaram, em uma palestra no Yahoo! sede, que no primeiro ano de estar on-line, o GitHub acumulou mais de 46 mil repositórios públicos, 17 mil dos quais foram formados apenas no mês anterior. Naquela época, cerca de 6200 repositórios haviam sido bifurcados pelo menos uma vez e 4600 foram fundidos.', 'github, git, hub, home, version-controller, host, linux', 'Github', 'https://github.com', 1, '2020-10-12 03:07:47', '2020-10-13 17:00:58'),
(2, 1, 'NodeJS O começo', '# Como começo com o Node.js depois de instalá-lo?\n\n- Uma vez instalados node.js, vamos construir nosso primeiro servidor web. Crie um arquivo chamado app.js contendo os seguintes conteúdos:\n\n```javascript\n   \nconst http = require(\'http\');\n\nconst hostname = \'127.0.0.1\';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader(\'Content-Type\', \'text/plain\');\n  res.end(\'Hello World\');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n```\n\nAgora, execute seu servidor web usando o node app.js. Visite http://localhost:3000 e você verá uma mensagem dizendo \"Hello World\".', 'Nodejs, js, server', 'javascript', 'https://nodejs.org/en/docs/guides/getting-started-guide/', NULL, '2020-10-12 03:12:25', '2020-10-12 03:12:25'),
(3, 1, 'Nodejs Módulo SO', '# SO\n\nO módulo de **sistema operacional** fornece métodos e propriedades de utilidade relacionadas ao sistema operacional. Pode ser acessado usando: \n\n`const os = require(\'os\');`\n\n# os.cpus()\n> Adicionado na versão: v0.3.3\n\n`retorna <Object[]>`\n\n- Retorna uma matriz de objetos contendo informações sobre cada núcleo lógico da CPU.\n- As propriedades incluídas em cada objeto incluem:\n\n**model** <string>;\n\n**speed** <number> (in MHz);\n\n**times** <Object>;\n\n1. Tipos\n   - [X] user <number> O número de milissegundos que a CPU gastou no modo usuário.\n   - [X] nice <number> O número de milissegundos que a CPU gastou no modo agradável.\n- [X] sys <number> O número de milissegundos que a CPU gastou no modo sys.\n- [X] idle <number> O número de milissegundos que a CPU gastou no modo inativo.\n- [X] irq <number> O número de milissegundos que a CPU gastou no modo irq.\n\n```js\n[\n  {\n    model: \'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz\',\n    speed: 2926,\n    times: {\n      user: 252020,\n      nice: 0,\n      sys: 30340,\n      idle: 1070356870,\n      irq: 0\n    }\n  },\n  {\n    model: \'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz\',\n    speed: 2926,\n    times: {\n      user: 306960,\n      nice: 0,\n      sys: 26980,\n      idle: 1071569080,\n      irq: 0\n    }\n  },\n  {\n    model: \'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz\',\n    speed: 2926,\n    times: {\n      user: 248450,\n      nice: 0,\n      sys: 21750,\n      idle: 1070919370,\n      irq: 0\n    }\n  },\n  {\n    model: \'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz\',\n    speed: 2926,\n    times: {\n      user: 256880,\n      nice: 0,\n      sys: 19430,\n      idle: 1070905480,\n      irq: 20\n    }\n  }\n]\n```\n', 'nodejs, server, OS', 'nodejs', 'https://nodejs.org/dist/latest-v12.x/docs/api/os.html#os_os', NULL, '2020-10-12 03:28:46', '2020-10-12 03:28:46'),
(4, 1, 'Node.js Crypto', '# Cryptografia com Crypto\n\n- O módulo criptográfico fornece funcionalidade criptográfica que inclui um conjunto de wrappers para funções de hash, HMAC, cifra, decifração, assinatura e verificação do OpenSSL.\n\nUse ``require(\'crypto\')`` para acessar este módulo.\n\n```js\nconst crypto = require(\'crypto\');\n\nconst secret = \'abcdefg\';\nconst hash = crypto.createHmac(\'sha256\', secret)\n                   .update(\'I love cupcakes\')\n                   .digest(\'hex\');\nconsole.log(hash);\n// Prints:\n//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e\n```\n\n## Determinar se o suporte de criptografia não está disponível\n\nÉ possível que o Node.js seja construído sem incluir suporte para o módulo criptográfico. Nesses casos, chamar `require(\'crypto\')` resultará em um erro.\n\n```js\nlet crypto;\ntry {\n  crypto = require(\'crypto\');\n} catch (err) {\n  console.log(\'crypto support is disabled!\');\n}\n```\n\n---\n---\n---\n\n# Class: *Cipher*\n\n- Instâncias da classe Cipher são usadas para criptografar dados. A classe pode ser usada de duas maneiras:\n\n- [x] Como um *stream* que é tanto legível quanto gravável, onde dados não criptografados simples são gravados para produzir dados criptografados no lado legível.\n\n- [x] Usando os métodos  `` cipher.update()``  e ` `cipher.final()`` para produzir os dados criptografados.\n\n- Exemplo: usando objetos Cipher como *stream*:\n\n```js\nconst crypto = require(\'crypto\');\n\nconst algorithm = \'aes-192-cbc\';\nconst password = \'Password used to generate key\';\n// Key length is dependent on the algorithm. In this case for aes192, it is\n// 24 bytes (192 bits).\n// Use async `crypto.scrypt()` instead.\nconst key = crypto.scryptSync(password, \'salt\', 24);\n// Use `crypto.randomBytes()` to generate a random iv instead of the static iv\n// shown here.\nconst iv = Buffer.alloc(16, 0); // Initialization vector.\n\nconst cipher = crypto.createCipheriv(algorithm, key, iv);\n\nlet encrypted = \'\';\ncipher.on(\'readable\', () => {\n  let chunk;\n  while (null !== (chunk = cipher.read())) {\n    encrypted += chunk.toString(\'hex\');\n  }\n});\ncipher.on(\'end\', () => {\n  console.log(encrypted);\n  // Prints: e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa\n});\n\ncipher.write(\'some clear text data\');\ncipher.end();\n```\n\n---\n---\n---\n\n# Class *Certificate*\n\n- O módulo criptográfico fornece a classe Certificado para trabalhar com dados SPKAC. O uso mais comum é manipular a saída gerada pelo elemento <keygen> do HTML5. O Node.js usa a implementação SPKAC do OpenSSL internamente.\n\n``Certificate.exportChallenge(spkac)``\n\n- [X] **spkac** <string> | <Buffer> | <TypedArray> | <DataView>\n- [X] *Returns:*  **<Buffer>** O componente de desafio da estrutura de dados spkac, que inclui uma chave pública e um desafio.\n\n```JS\nconst { Certificate } = require(\'crypto\');\nconst spkac = getSpkacSomehow();\nconst challenge = Certificate.exportChallenge(spkac);\nconsole.log(challenge.toString(\'utf8\'));\n// Prints: the challenge as a UTF8 string\n```', 'nodejs, js, linux, crypto', 'nodejs', 'https://github.com/nodejs/node/blob/v12.19.0/lib/crypto.js', 1, '2020-10-12 03:47:28', '2020-10-13 12:26:34'),
(5, 2, 'NodeJS manipulando DNS', '# DNS\n\n> O módulo dns permite a resolução de nomes. Por exemplo, use-o para pesquisar endereços IP de nomes de host.\n\nEmbora nomeado para o* Sistema de Nomes de Domínio (DNS)*, ele nem sempre usa o protocolo *DNS* para pesquisas. *dns.lookup()* usa os recursos do sistema operacional para realizar a resolução de nomes.\n\nPode não ser necessário realizar nenhuma comunicação de rede. Para executar a resolução de nomes da maneira que outros aplicativos no mesmo sistema fazem, use *dns.lookup()*.\n\n```js\nconst dns = require(\'dns\');\n\ndns.lookup(\'example.org\', (err, address, family) => {\n  console.log(\'address: %j family: IPv%s\', address, family);\n});\n// address: \"93.184.216.34\" family: IPv4\n```\n\n- Todas as outras funções no módulo* dns* se conectam a um servidor *DNS real* para realizar a resolução de nomes. Eles sempre usarão a rede para realizar consultas DNS.\n\n- Essas funções não usam o mesmo conjunto de arquivos de configuração usados por `dns.lookup()`  **(por exemplo, /etc/hosts)**.\n\n- Use essas funções para sempre realizar consultas DNS, contornando outros recursos de resolução de nomes.\n\n```js\nconst dns = require(\'dns\');\n\ndns.resolve4(\'archive.org\', (err, addresses) => {\n  if (err) throw err;\n\n  console.log(`addresses: ${JSON.stringify(addresses)}`);\n\n  addresses.forEach((a) => {\n    dns.reverse(a, (err, hostnames) => {\n      if (err) {\n        throw err;\n      }\n      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);\n    });\n  });\n});\n```\n\n---\n\n# Class: *dns.Resolver*\n\n> Um resolvedor independente para solicitações DNS.\n\nA criação de um novo resolvedor usa as configurações padrão do servidor. Definir os servidores usados para um resolvedor usando ``resolver.setServers()`` não afeta outros resolvedores:\n\n```js\nconst { Resolver } = require(\'dns\');\nconst resolver = new Resolver();\nresolver.setServers([\'4.4.4.4\']);\n\n// This request will use the server at 4.4.4.4, independent of global settings.\nresolver.resolve4(\'example.org\', (err, addresses) => {\n  // ...\n});\n```\n\n---\n\nExemplo de uso:\n\n```js\nconst dns = require(\'dns\');\nconst options = {\n  family: 6,\n  hints: dns.ADDRCONFIG | dns.V4MAPPED,\n};\ndns.lookup(\'example.com\', options, (err, address, family) =>\n  console.log(\'address: %j family: IPv%s\', address, family));\n// address: \"2606:2800:220:1:248:1893:25c8:1946\" family: IPv6\n\n// When options.all is true, the result will be an Array.\noptions.all = true;\ndns.lookup(\'example.com\', options, (err, addresses) =>\n  console.log(\'addresses: %j\', addresses));\n// addresses: [{\"address\":\"2606:2800:220:1:248:1893:25c8:1946\",\"family\":6}]\n```', 'nodejs, DNS, server, js, os, host', 'nodejs', 'https://nodejs.org/dist/latest-v12.x/docs/api/dns.html', NULL, '2020-10-12 04:03:14', '2020-10-12 04:03:14'),
(6, 1, 'Sistemas operacionais', '# Sistemas operacionais (WINDOWS)\n\n- é um programa ou um conjunto de programas cuja função é gerenciar os recursos do sistema (definir qual programa recebe atenção do processador, gerenciar memória, criar um sistema de arquivos, etc.), fornecendo uma interface entre o computador e o usuário. \n\n- Embora possa ser executado imediatamente após a máquina ser ligada, a maioria dos computadores pessoais de hoje o executa através de outro programa armazenado em uma memória não-volátil ROM chamado BIOS num processo chamado \"bootstrapping\", conceito em inglês usado para designar processos autossustentáveis, ou seja, capazes de prosseguirem sem ajuda externa. Após executar testes e iniciar os componentes da máquina (monitores, discos, etc), o BIOS procura pelo sistema operacional em alguma unidade de armazenamento, geralmente o Disco Rígido, e a partir daí, o sistema operacional \"toma\" o controle da máquina. O sistema operacional reveza sua execução com a de outros programas, como se estivesse vigiando, controlando e orquestrando todo o processo computacional.\n\n*numa visão de cima para baixo (top-down)*: é uma abstração do hardware, fazendo o papel de intermediário entre os programas (software) e os componentes físicos do computador (hardware); \n\n*numa visão de baixo para cima (bottom-up)*: é um gerenciador de recursos, i.e., que controla as aplicações (processos) a executar, como, quando e com quais recursos (memória, disco, periféricos).\n', 'OS, linux, windows, macOS, SYS', 'OS', 'https://pt.wikipedia.org/wiki/Sistema_operativo', NULL, '2020-10-13 12:42:43', '2020-10-18 05:36:22'),
(7, 3, 'Markdown', '# exemplos de marcações em Markdown\n\nA simple markdown editor with preview, implemented with React.js and TypeScript. This React Component aims to provide a simple Markdown editor with syntax highlighting support. This is based on `textarea` encapsulation, so it does not depend on any modern code editors such as Acs, CodeMirror, Monaco etc.\n\n### Features\n\n- 📑 Indent line or selected text by pressing tab key, with customizable indentation.\n- ♻️ Based on `textarea` encapsulation, does not depend on any modern code editors.\n- 🚧 Does not depend on the [`uiw`](https://github.com/uiwjs/uiw) component library.\n- 🚘 Automatic list on new lines.\n\n### Quick Start\n\n```bash\nnpm i @uiw/react-md-editor\n```\n\n### Using\n\n```jsx\nimport React from \"react\";\nimport ReactDOM from \"react-dom\";\nimport MDEditor from \'@uiw/react-md-editor\';\n\nexport default function App() {\n  const [value, setValue] = React.useState(\"**Hello world!!!**\");\n  return (\n    <div className=\"container\">\n      <MDEditor\n        value={value}\n        onChange={setValue}\n      />\n      <MDEditor.Markdown source={value} />\n    </div>\n  );\n}\n```\n\n- [Demo preview for CodeSandbox](https://codesandbox.io/s/markdown-editor-for-react-izdd6)  \n- [Demo preview for Github gh-pages](https://uiwjs.github.io/react-md-editor/)  \n- [Demo preview for Gitee gh-pages](https://uiw.gitee.io/react-md-editor/)  \n\n### Custom Toolbars\n\n```ts\nimport React from \"react\";\nimport ReactDOM from \"react-dom\";\nimport MDEditor, { commands, ICommand, TextState, TextApi } from \'@uiw/react-md-editor\';\n\nconst title3: ICommand = {\n  name: \'title3\',\n  keyCommand: \'title3\',\n  buttonProps: { \'aria-label\': \'Insert title3\' },\n  icon: (\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 520 520\">\n      <path fill=\"currentColor\" d=\"M15.7083333,468 C7.03242448,468 0,462.030833 0,454.666667 L0,421.333333 C0,413.969167 7.03242448,408 15.7083333,408 L361.291667,408 C369.967576,408 377,413.969167 377,421.333333 L377,454.666667 C377,462.030833 369.967576,468 361.291667,468 L15.7083333,468 Z M21.6666667,366 C9.69989583,366 0,359.831861 0,352.222222 L0,317.777778 C0,310.168139 9.69989583,304 21.6666667,304 L498.333333,304 C510.300104,304 520,310.168139 520,317.777778 L520,352.222222 C520,359.831861 510.300104,366 498.333333,366 L21.6666667,366 Z M136.835938,64 L136.835937,126 L107.25,126 L107.25,251 L40.75,251 L40.75,126 L-5.68434189e-14,126 L-5.68434189e-14,64 L136.835938,64 Z M212,64 L212,251 L161.648438,251 L161.648438,64 L212,64 Z M378,64 L378,126 L343.25,126 L343.25,251 L281.75,251 L281.75,126 L238,126 L238,64 L378,64 Z M449.047619,189.550781 L520,189.550781 L520,251 L405,251 L405,64 L449.047619,64 L449.047619,189.550781 Z\" />\n    </svg>\n  ),\n  execute: (state: TextState, api: TextApi) => {\n    let modifyText = `### ${state.selectedText}\\n`;\n    if (!state.selectedText) {\n      modifyText = `### `;\n    }\n    api.replaceSelection(modifyText);\n  },\n};\n\nexport default function App() {\n  const [value, setValue] = React.useState(\"**Hello world!!!**\");\n  return (\n    <div className=\"container\">\n      <MDEditor\n        value=\"Hello Markdown!\"\n        commands={[\n          commands.bold, commands.hr, commands.italic, commands.divider, commands.codeEdit, commands.codeLive, commands.codePreview, commands.divider,\n          commands.fullscreen, \n          // Custom Toolbars\n          title3,\n        ]}\n      />\n    </div>\n  );\n}\n```\n\n### Preview Markdown\n\n```jsx\nimport React from \"react\";\nimport ReactDOM from \"react-dom\";\nimport MDEditor from \'@uiw/react-md-editor\';\n\nexport default function App() {\n  return (\n    <div className=\"container\">\n      <MDEditor.Markdown source=\"Hello Markdown!\" />\n    </div>\n  );\n}\n```\n\n### Support Custom KaTeX Preview\n\nKaTeX is a fast, easy-to-use JavaScript library for TeX math rendering on the web, We perform math rendering through [`KaTeX`](https://github.com/KaTeX/KaTeX).\n\nThe following example is preview in [CodeSandbox](https://codesandbox.io/s/markdown-editor-katex-for-react-7v3vl).\n\n```bash\nnpm install katex\n```\n\n```jsx\nimport React from \"react\";\nimport ReactDOM from \"react-dom\";\nimport MDEditor from \'@uiw/react-md-editor\';\nimport katex from \'katex\';\nimport \'katex/dist/katex.css\';\n\n\nconst mdKaTeX = `This is to display the \n\\`\\$\\$\\c = \\\\pm\\\\sqrt{a^2 + b^2}\\$\\$\\`\n in one line\n\n\\`\\`\\`KaTeX\nc = \\\\pm\\\\sqrt{a^2 + b^2}\n\\`\\`\\`\n`;\n\nconst renderers = {\n  inlineCode: ({ children }) => {\n    if (/^\\$\\$(.*)\\$\\$/.test(children)) {\n      const html = katex.renderToString(children.replace(/^\\$\\$(.*)\\$\\$/, \'$1\'), {\n        throwOnError: false,\n      });\n      return <code dangerouslySetInnerHTML={{ __html: html }} />\n    }\n    return children;\n  },\n  code: ({ children, language, value }) => {\n    if (language.toLocaleLowerCase() === \'katex\') {\n      const html = katex.renderToString(value, {\n        throwOnError: false\n      });\n      return (\n        <pre>\n          <code dangerouslySetInnerHTML={{ __html: html }} />\n        </pre>\n      );\n    }\n    return children;\n  }\n}\n\nexport default function App() {\n  return (\n    <MDEditor value={mdKaTeX} previewOptions={{ renderers: renderers }} />\n  );\n}\n```\n\n### Props\n\n- `value: string`: The Markdown value.\n- `onChange?: (value: string)`: Event handler for the `onChange` event.\n- `commands?: ICommand[]`: An array of [`ICommand`](https://github.com/uiwjs/react-md-editor/blob/098c0b657300bfbfef83976558ee37f737e842a2/src/commands/index.ts#L20-L29), which, each one, contain a [`commands`](https://github.com/uiwjs/react-md-editor/blob/098c0b657300bfbfef83976558ee37f737e842a2/src/commands/index.ts#L111-L112) property. If no commands are specified, the default will be used. Commands are explained in more details below.\n- `autoFocus?: number=true`: Can be used to make `Markdown Editor` focus itself on initialization.\n- `previewOptions?: ReactMarkdown.ReactMarkdownProps`: This is reset [react-markdown](https://github.com/rexxars/react-markdown) settings.\n- `textareaProps?: TextareaHTMLAttributes`: Set the `textarea` related props.\n- `height?: number=200`: The height of the editor.\n- `visiableDragbar?: boolean=true`: Show drag and drop tool. Set the height of the editor.\n- `fullscreen?: boolean=false`: Show markdown preview.\n- `preview?: \'live\' | \'edit\' | \'preview\'`: Default value `live`, Show markdown preview.\n- `maxHeight?: number=1200`: Maximum drag height. The `visiableDragbar=true` value is valid.\n- `minHeights?: number=100`: Minimum drag height. The `visiableDragbar=true` value is valid.\n- `tabSize?: number=2`: The number of characters to insert when pressing tab key. Default `2` spaces.\n\n### Development\n\n```bash\nnpm run watch:types  # Listen create type files.\nnpm run watch:ts     # Listen compile .tsx files.\nnpm run doc:dev      # Preview code example.\n```\n\n### Other\n\nIf you need more features-rich Markdown Editor, you can use [@uiwjs/react-markdown-editor](https://github.com/uiwjs/react-markdown-editor)\n\n- [@uiw/react-codemirror](https://github.com/uiwjs/react-codemirror): CodeMirror component for React. @codemirror\n- [@uiw/react-monacoeditor](https://github.com/jaywcjlove/react-monacoeditor): Monaco Editor component for React.\n- [@uiw/react-markdown-editor](https://github.com/uiwjs/react-markdown-editor): A markdown editor with preview, implemented with React.js and TypeScript.\n\n### License\n\nLicensed under the MIT License.\n\n', 'MD, Markdown, tags, marcações, Custom', 'Markdown', 'https://uiwjs.github.io/react-md-editor/', NULL, '2020-10-13 13:39:34', '2020-10-13 13:39:34'),
(8, 2, 'Create React App', '# ReactJS\n\n> React é uma das bibliotecas JavaScript mais populares para aplicativos da web front-end.\n\n*React* é uma *biblioteca JavaScript* baseada em componente usada para criar uma única página ou grandes aplicativos da web com conteúdo dinâmico. Neste curso, você aprenderá os conceitos básicos do React de uma forma divertida e eficaz.\n\nO curso cobre *React DOMs, JSX, componentes, adereços, estado, ganchos, métodos de ciclo de vida, manipulação de eventos, listas de renderização, ações, redutores* e muito mais.\n\n*React* é apreciado por sua simplicidade, facilidade de aprendizado, abordagem nativa, lógica de componente reutilizável, desempenho, facilidade de teste e depuração.\n\nO *desenvolvimento front-end* refere-se ao que o usuário final (também comumente referido como \"cliente\") pode ver. Nas formas mais básicas, o desenvolvimento front-end consiste em HTML, CSS e JavaScript.\n\nEventualmente, os desenvolvedores decidiram que deveria haver uma maneira melhor de gerenciar todo esse código, então eles criaram bibliotecas que poderiam tornar a vida mais fácil. React era uma dessas bibliotecas.\n\n---\n\n# Adicionando React\n\nDepois de adicionar as tags de script necessárias, podemos começar a construir nosso aplicativo React!\n\nAdicionamos um container, que será usado para mostrar algo usando React.\n\n`<div id=\"container\"></div>\n`\n\nAgora, é hora de nosso primeiro código *React*!\nVamos exibir uma mensagem simples como um título:\n\n```js\n<script type=\"text/babel\">\n   ReactDOM.render(\n     <h1>Hello, React!</h1>,\n     document.getElementById(\'container\')\n   ) \n</script>\n```\n\nPara começar, certifique-se de ter uma versão recente do *Node* instalada em sua máquina.\n**Execute os seguintes comandos no Terminal** para criar e iniciar um aplicativo React chamado \"my-app\":\n\n```\nnpx create-react-app my-app\ncd my-app\nnpm start \n```\n\n> Criar aplicativo React nos permite focar no código, em vez de instalar e configurar ferramentas diferentes.\n', 'React.js, js, react, nodejs, redux, web', 'React.js', 'https://www.sololearn.com/Play/react', NULL, '2020-10-14 00:25:10', '2020-10-14 00:25:10'),
(9, 2, 'React.js Estrutura', '# Project Structure\n\nVamos explorar a estrutura do nosso projeto abrindo-o usando um editor de código.\nUsaremos o *Visual Studio Code* em nosso exemplo, mas você está livre para usar qualquer editor de código.\n\n![folder structure](https://api.sololearn.com/DownloadFile?id=3940)\n\nA pasta *public* contém arquivos relacionados a como o aplicativo será exibido no cliente, o mais importante deles sendo ``index.html``, que é o modelo **HTML** de nossa página:\n\n![folder structure](https://api.sololearn.com/DownloadFile?id=3941)\n\nA pasta *src* contém todos os arquivos **JavaScript, CSS e de imagem** que serão compilados em um arquivo de pacote e injetados em ``index.html``:\n\n![folder structure](https://api.sololearn.com/DownloadFile?id=3942)\n\n*Como o React é compilado em um arquivo de pacote?*\n\nEle usa o que é chamado de \"carregador de arquivos\". No caso de Create React App, Webpack é usado.\n\n*Webpack* cria um arquivo **\"pacote\"** contendo o conteúdo de vários arquivos que precisam ser **\"agrupados\"** e tudo é adicionado em um único arquivo. Em vez de fazer o arquivo **HTM**L procurar vários arquivos, o que pode diminuir o tempo de carregamento tremendamente, ele só precisa encontrar um arquivo.\n\n> Lembre-se de que todos os arquivos *CSS* e *JS* precisam ser adicionados à pasta *src*, caso contrário, o *webpack* não os verá.\n\nEmbora existam outros arquivos na pasta **src** que vêm com o aplicativo **Create React** quando gerado, os dois arquivos abaixo são os únicos arquivos críticos:\n\n• ``index.js``: Este arquivo é o ponto de entrada em nosso aplicativo.\n\nEm nosso código, um método chamado ``ReactDOM.render()`` é usado para encontrar um elemento com ``id = \"root\"`` no **HTML** e adicionar nosso aplicativo **React** dentro desse elemento (semelhante à lição anterior).\n\n• ``App.js``: este arquivo é o principal componente que será renderizado para o DOM, que atualmente inclui a imagem do logotipo React e o texto padrão, que vemos na saída.', 'React.js, Nodejs, js, ts, structure', 'React.js', 'https://www.sololearn.com/Play/react', NULL, '2020-10-14 00:38:20', '2020-10-14 00:38:20'),
(10, 2, 'React.js Changing the Output', '# Mudando a saída\n\nAgora, quando sabemos como criar e executar um projeto React, vamos alterar a saída padrão para uma simples mensagem *Hello*.\n\nPara fazer isso, precisamos abrir* src/index.js* e alterar o código para o seguinte:\n\n```js\nReactDOM.render(\n  <h1>Hello, React!</h1>,\n  document.getElementById(\'root\')\n);\n```\n\nIsso produzirá a mensagem como um título:\n\n![Localhost:3000](https://api.sololearn.com/DownloadFile?id=4388)\n\n> Um recurso muito legal do **Create React App** é o *Fast Refresh*, que reflete automaticamente as alterações feitas no código do navegador.', 'react.js, nodejs, js, react', 'React.js', 'https://www.sololearn.com/Play/react', NULL, '2020-10-14 00:43:17', '2020-10-14 00:43:17'),
(11, 1, 'React.js StackBlitz', '# StackBlitz\n\nPara tornar mais fácil brincar com o React, usaremos o *StackBlitz* como nosso playground online para permitir a alteração e execução do código React real.\n\nAqui está o mesmo projeto no StackBlitz:\n\n![StackBlitz](https://api.sololearn.com/DownloadFile?id=4389)\n\n[Experimente no StackBlitz](https://stackblitz.com/edit/hello-react-example?file=index.js)\n\nRemovemos todos os arquivos extras, como as imagens do logotipo, para tornar a estrutura do projeto mais simples.\n\n- Agora temos os seguintes arquivos:\n\n``index.html``: O modelo de página HTML.\n\n``index.js``: O ponto de entrada do nosso aplicativo.\n\n``style.css``: a folha de estilo do nosso projeto.\n\n``package.json``: contém vários metadados relevantes para o projeto, como dependências.\n\n> Toque em Experimentar no StackBlitz e brinque com o código!', 'Node.js, React.js, react, StackBlitz', 'React.js', 'https://www.sololearn.com/Play/react', NULL, '2020-10-14 00:50:34', '2020-10-14 00:50:34'),
(12, 1, 'Variáveis em Python', '# Variáveis\n\nUma variável permite que você armazene um valor atribuindo-o a um nome, que pode ser usado para se referir ao valor posteriormente no programa.\nPor exemplo, no desenvolvimento de jogos, você usaria uma variável para armazenar os pontos do jogador.\n\n- Para atribuir uma variável, use um sinal de igual.\n\n``` user = \"James\"  ```\n\n- Você pode usar variáveis para realizar operações correspondentes, assim como fez com números e strings:\n\n```python\nx = 7\nprint(x)\n\nprint(x + 3)\nprint(x) \n```\n\n> Como você pode ver, a variável armazena seu valor em todo o programa.', 'Python, Py, Var, venv, stores', 'Python', 'https://www.sololearn.com/Play/Python', NULL, '2020-10-14 01:00:55', '2020-10-14 01:00:55');

-- --------------------------------------------------------

--
-- Estrutura da tabela `issues_marked`
--

CREATE TABLE `issues_marked` (
  `id` int(11) NOT NULL,
  `issue_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `issues_marked`
--

INSERT INTO `issues_marked` (`id`, `issue_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2020-10-13 12:46:54', '2020-10-13 12:46:54'),
(2, 3, 1, '2020-10-13 12:47:06', '2020-10-13 12:47:06'),
(3, 5, 1, '2020-10-13 12:47:13', '2020-10-13 12:47:13'),
(4, 6, 1, '2020-10-13 12:47:20', '2020-10-13 12:47:20'),
(5, 5, 3, '2020-10-13 15:45:47', '2020-10-13 15:45:47'),
(6, 8, 2, '2020-10-14 01:20:29', '2020-10-14 01:20:29'),
(7, 9, 2, '2020-10-14 01:20:39', '2020-10-14 01:20:39'),
(8, 10, 2, '2020-10-14 01:20:48', '2020-10-14 01:20:48'),
(9, 11, 2, '2020-10-14 01:20:53', '2020-10-14 01:20:53'),
(10, 12, 2, '2020-10-14 01:20:58', '2020-10-14 01:20:58'),
(11, 8, 1, '2020-10-18 04:50:33', '2020-10-18 04:50:33');

-- --------------------------------------------------------

--
-- Estrutura da tabela `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `transcription` varchar(255) NOT NULL,
  `sender` int(11) NOT NULL,
  `receiver` int(11) NOT NULL,
  `state` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `notifications`
--

INSERT INTO `notifications` (`id`, `transcription`, `sender`, `receiver`, `state`, `type`, `created_at`, `updated_at`) VALUES
(1, 'http://localhost/3337/profile', 2, 1, 'pendente', 'request', '2020-10-12 03:50:15', '2020-10-12 03:50:15'),
(2, 'http://localhost/3337/profile', 3, 1, 'pendente', 'request', '2020-10-12 04:30:44', '2020-10-12 04:30:44'),
(3, 'http://localhost/3337/profile', 3, 3, 'pendente', 'request', '2020-10-12 04:30:47', '2020-10-12 04:30:47'),
(4, 'http://localhost/3337/profile', 3, 2, 'pendente', 'request', '2020-10-12 04:31:32', '2020-10-12 04:31:32'),
(5, '(PARABÉNS) Você foi marcado como um usuário destaque. ❤😊❤👏👏', 1, 2, 'complete', 'ourteam', '2020-10-13 12:23:07', '2020-10-13 12:23:07'),
(6, 'http://localhost/3337/profile', 1, 2, 'pendente', 'request', '2020-10-13 12:45:19', '2020-10-13 12:45:19'),
(7, 'http://localhost:3337/playlists?watch=1&principal=1&guest=2&box=1', 1, 2, 'pendente', 'mention', '2020-10-13 12:50:39', '2020-10-13 12:50:39'),
(8, 'http://localhost/3337/profile', 1, 3, 'pendente', 'request', '2020-10-13 12:52:08', '2020-10-13 12:52:08'),
(9, 'http://localhost:3337/playlists?watch=1&principal=1&guest=2&box=1', 1, 3, 'pendente', 'mention', '2020-10-13 12:52:50', '2020-10-13 12:52:50'),
(10, '(PARABÉNS) Você foi marcado como um usuário destaque. ❤😊❤👏👏', 5, 1, 'complete', 'ourteam', '2020-10-13 16:54:14', '2020-10-13 16:54:14'),
(11, '(PARABÉNS) Você foi marcado como um usuário destaque. ❤😊❤👏👏', 5, 3, 'complete', 'ourteam', '2020-10-13 16:54:25', '2020-10-13 16:54:25'),
(12, 'vlw pelo feedback.\n✔❤❤', 1, 2, 'complete', 'ourteam', '2020-10-13 17:05:16', '2020-10-13 17:05:16'),
(13, 'http://localhost/3337/profile', 1, 7, 'pendente', 'request', '2020-10-18 04:49:38', '2020-10-18 04:49:38'),
(14, 'http://localhost:3337/playlists?watch=2&principal=1&guest=3&box=1', 1, 3, 'pendente', 'mention', '2020-10-18 05:24:41', '2020-10-18 05:24:41'),
(15, 'http://localhost:3337/playlists?watch=2&principal=1&guest=3&box=1', 1, 7, 'pendente', 'mention', '2020-10-18 05:27:34', '2020-10-18 05:27:34'),
(16, 'estamos avaliando a sua requisição..\nVLW pelo feedback. ❤❤❤😊', 5, 2, 'complete', 'ourteam', '2020-10-18 05:42:00', '2020-10-18 05:42:00'),
(17, 'ok, vlw🌹', 1, 2, 'complete', 'ourteam', '2020-11-02 23:29:19', '2020-11-02 23:29:19');

-- --------------------------------------------------------

--
-- Estrutura da tabela `playlist`
--

CREATE TABLE `playlist` (
  `id` int(11) NOT NULL,
  `owner` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `stars` int(11) NOT NULL,
  `users_learning` int(11) NOT NULL,
  `destaque` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `playlist`
--

INSERT INTO `playlist` (`id`, `owner`, `name`, `stars`, `users_learning`, `destaque`, `created_at`, `updated_at`) VALUES
(1, 1, 'Iniciando com Node.js', 0, 0, 1, '2020-10-13 12:47:50', '2020-10-13 17:01:45'),
(2, 2, 'React.js Iniciando', 0, 0, 1, '2020-10-14 01:21:23', '2020-10-14 01:23:29'),
(3, 1, 'dfbsdfb', 0, 0, 0, '2020-10-29 01:17:37', '2020-10-29 01:17:37');

-- --------------------------------------------------------

--
-- Estrutura da tabela `playlist_and_issue`
--

CREATE TABLE `playlist_and_issue` (
  `id` int(11) NOT NULL,
  `list` int(11) NOT NULL,
  `issue` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `playlist_and_issue`
--

INSERT INTO `playlist_and_issue` (`id`, `list`, `issue`, `created_at`, `updated_at`) VALUES
(1, 1, 6, '2020-10-13 12:47:58', '2020-10-13 12:47:58'),
(2, 1, 3, '2020-10-13 12:48:04', '2020-10-13 12:48:04'),
(3, 1, 5, '2020-10-13 12:48:05', '2020-10-13 12:48:05'),
(4, 2, 8, '2020-10-14 01:21:26', '2020-10-14 01:21:26'),
(5, 2, 9, '2020-10-14 01:21:29', '2020-10-14 01:21:29'),
(6, 2, 10, '2020-10-14 01:21:32', '2020-10-14 01:21:32'),
(7, 2, 11, '2020-10-14 01:21:34', '2020-10-14 01:21:34'),
(8, 2, 12, '2020-10-14 01:21:35', '2020-10-14 01:21:35'),
(9, 3, 1, '2020-10-29 01:17:48', '2020-10-29 01:17:48'),
(10, 3, 8, '2020-10-29 01:17:51', '2020-10-29 01:17:51'),
(11, 3, 5, '2020-10-29 01:17:52', '2020-10-29 01:17:52');

-- --------------------------------------------------------

--
-- Estrutura da tabela `playlist_marked`
--

CREATE TABLE `playlist_marked` (
  `id` int(11) NOT NULL,
  `list_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `playlist_marked`
--

INSERT INTO `playlist_marked` (`id`, `list_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '2020-10-14 01:19:32', '2020-10-14 01:19:32'),
(2, 2, 1, '2020-10-18 05:12:02', '2020-10-18 05:12:02');

-- --------------------------------------------------------

--
-- Estrutura da tabela `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `experience` varchar(255) NOT NULL,
  `tool` varchar(255) NOT NULL,
  `use_case` varchar(255) NOT NULL,
  `interests` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `questions`
--

INSERT INTO `questions` (`id`, `experience`, `tool`, `use_case`, `interests`, `created_at`, `updated_at`) VALUES
(1, 'Muita', 'Software Engineer', '(+) Ensinar', 'Node.js, Javascript, Typescrypt, python, SOS, SYS, ux/ui, C++, C#, Company, Linux, Windows, Criation', '2020-10-12 02:54:38', '2020-10-12 02:54:38'),
(2, 'Muita', 'Software Engineer', '(+) Ensinar', 'linux, C++, C#, OS. SYS, C-LIKE, C', '2020-10-12 03:50:03', '2020-10-12 03:50:03'),
(3, 'Muita', 'Segurança da informação', '(+) Ensinar', 'Node.JS, Java, Python, TS, C++, C#, C-LIKE, linux, SO, kali-linux', '2020-10-12 04:30:34', '2020-10-12 04:30:34'),
(4, 'Muita', 'Software Engineer', '(+) Ensinar', 'Nodejs, Javascript, typescript. Elixir, Python, Java, PM, MVP, DevOps', '2020-10-14 01:07:01', '2020-10-14 01:07:01'),
(5, 'Muita', 'Software Engineer', '(+) Ensinar', 'Node.JS, C++, C, C#, POO, SYS, Network, Azure, Stores', '2020-10-14 01:09:48', '2020-10-14 01:09:48'),
(6, 'Muita', 'Técnico de rede', '(+) Ensinar', 'PHP, XAMPP, Servers, SYS, SO, PM, Maneger, Design', '2020-10-14 01:11:53', '2020-10-14 01:11:53'),
(7, 'Quantidade moderada', 'UX & Design', 'Aprender', 'UX/UI, Design, CSS, HTML, Bootstrap, Animation, Gimp', '2020-10-14 01:14:08', '2020-10-14 01:14:08'),
(8, 'Muita', 'Software Engineer', '(+) Ensinar', 'Javascript, node.sj, Design, HTML, CSS, VSCode', '2020-10-14 01:17:32', '2020-10-14 01:17:32');

-- --------------------------------------------------------

--
-- Estrutura da tabela `scores`
--

CREATE TABLE `scores` (
  `id` int(11) NOT NULL,
  `owner` int(11) DEFAULT NULL,
  `issues_createds` int(11) DEFAULT NULL,
  `lists_createds` int(11) DEFAULT NULL,
  `anotations` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `scores`
--

INSERT INTO `scores` (`id`, `owner`, `issues_createds`, `lists_createds`, `anotations`, `created_at`, `updated_at`) VALUES
(1, 1, 14, 4, 4, '2020-10-12 02:52:13', '2020-10-29 01:17:44'),
(2, 2, 8, 2, 0, '2020-10-12 03:48:23', '2020-10-14 01:21:25'),
(3, 3, 2, 0, 0, '2020-10-12 04:29:10', '2020-10-13 13:39:36'),
(4, 6, 0, 0, 0, '2020-10-14 01:05:45', '2020-10-14 01:05:45'),
(5, 7, 0, 0, 0, '2020-10-14 01:09:09', '2020-10-14 01:09:09'),
(6, 8, 0, 0, 0, '2020-10-14 01:11:12', '2020-10-14 01:11:12'),
(7, 9, 0, 0, 0, '2020-10-14 01:13:25', '2020-10-14 01:13:25'),
(8, 10, 0, 0, 0, '2020-10-14 01:16:48', '2020-10-14 01:16:48');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200525155650-create-user-table-auth.js'),
('20200525161737-create-questions-table.js'),
('20200605002411-create-user_question.js'),
('20200606034002-create-issue.js'),
('20200606080324-create-issue-status.js'),
('20200607182602-create-playlist.js'),
('20200607201746-create-playlist-contain-issues.js'),
('20200607215258-create-shared-learing.js'),
('20200609145736-crate-challenges.js'),
('20200626190229-create-reports-issues.js'),
('20200626190243-create-reports-users.js'),
('20200727192923-create-markeds.js'),
('20200727215620-create-users-markeds.js'),
('20200729174607-feedbacks.js'),
('20200819124659-create-notifications.js'),
('20200907182442-create-user-starry-list.js'),
('20200924032829-create-points-fill.js'),
('20200929163317-create-logs-admin.js'),
('20201006021900-create-boxs-wrapper.js'),
('20201009161853-create-anotations-reports.js'),
('20201010205126-create-dashboard-excluded-datas.js');

-- --------------------------------------------------------

--
-- Estrutura da tabela `shared_learning`
--

CREATE TABLE `shared_learning` (
  `id` int(11) NOT NULL,
  `learning` int(11) NOT NULL,
  `user_one` int(11) NOT NULL,
  `user_two` int(11) NOT NULL,
  `status_one` varchar(255) NOT NULL,
  `status_two` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `status_user`
--

CREATE TABLE `status_user` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `complete_issues` varchar(255) NOT NULL,
  `current_issue` varchar(255) NOT NULL,
  `desc_user` varchar(255) NOT NULL,
  `issue_createds` int(11) NOT NULL,
  `badge` varchar(255) NOT NULL,
  `approximations` int(11) NOT NULL,
  `approximate` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `github` varchar(255) DEFAULT NULL,
  `canny` tinyint(1) NOT NULL,
  `completed` tinyint(1) NOT NULL,
  `destaque` tinyint(1) NOT NULL,
  `excluded` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `github`, `canny`, `completed`, `destaque`, `excluded`, `created_at`, `updated_at`) VALUES
(1, 'genesys systems', 'ceo@genesis.com', '$2b$10$WfrEQK5ThFREa8gTlhPXCu1T3pO890sC.rwluVKokQhu1BYeIjns6', 'https://github.com/geni-sys', 1, 1, 1, 0, '2020-10-12 02:52:11', '2020-10-13 16:54:14'),
(2, 'Linus Torvalds', 'torvalds@linux.com', '$2b$10$H9LRkLWFGauEgJc8ZV6l0.iZbOxl9HNfZdy3cNB/MzVUYq4Bhzgmm', 'https://github.com/torvalds', 1, 1, 1, 0, '2020-10-12 03:48:21', '2020-10-13 12:23:07'),
(3, 'eliasallex', 'elliasallex52@genesis.com', '$2b$10$T2qVxGPCDn7pGZ4R76KZbOm4mg1Y2S75BcDuMvBr4DUqMuJG0JcZO', 'https://github.com/eliasallex', 0, 1, 1, 0, '2020-10-12 04:29:09', '2020-10-13 16:54:25'),
(4, 'Lavisa alexandre', 'lavisa@genesis.com', '$2b$10$oK.1kIKY5aUaCiKhv3AgAeoEffu7FB3qwHdUQ0rL06b9GFHqfdaui', 'https://github.com/elias', 0, 0, 0, 0, '2020-10-13 16:39:55', '2020-10-18 05:34:45'),
(5, 'Gabriel Castro', 'biel.castro@geni.com', '$2b$10$w/YtnOznSaK3NFMpzEBJL.Kk/5rUU9IsYsyzkkDtia6JI/Qt/aHdS', 'https://github.com/geni-sys', 1, 0, 0, 0, '2020-10-13 16:52:27', '2020-10-13 16:54:52'),
(6, 'diego fernades', 'diego3g@rocketseat.com', '$2b$10$f4THlNNtS0.p6aNHGfn25.ykKCSEtDqp6cetOWdVhCNs9hHgX/Xp6', 'https://github.com/diego3g', 0, 1, 0, 0, '2020-10-14 01:05:43', '2020-10-14 01:07:01'),
(7, 'alciomar hollanda', 'alcimar@dev.com', '$2b$10$oBNT56m1JMfyF5x2cL.WC.tGwW/t4nc1FmsHpWb6O1OPvb/IF7HfO', 'https://github.com/alciomarhollanda', 0, 1, 0, 0, '2020-10-14 01:09:08', '2020-10-14 01:09:48'),
(8, 'Gregor oliveira', 'gregor@dev.com', '$2b$10$u/vKqsU3n/sw08jY6s.u.uIw4W0tpM2qAi6n1xqJDy6Kq23QGsZUu', 'https://github.com/gregoryoliveiraa', 0, 1, 0, 0, '2020-10-14 01:11:11', '2020-10-14 01:11:53'),
(9, 'gigov paulino', 'gigov@coder.com', '$2b$10$oyHif9o9lFyfQWJp7S0CluudPdfnWtEVy4Ar7VEF9J317ZtAH9Ns2', 'https://github.com/GuiGigov008', 0, 1, 0, 0, '2020-10-14 01:13:23', '2020-10-14 01:14:08'),
(10, 'mayk brito', 'mayk@rocketseat.com', '$2b$10$9RK76.yaO2jEYRra5dlQmuST1A3XnOSIuo6.MRdmEblPSx7e4jC1e', 'https://github.com/maykbrito', 0, 1, 0, 0, '2020-10-14 01:16:47', '2020-10-14 01:17:32');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_marked`
--

CREATE TABLE `user_marked` (
  `id` int(11) NOT NULL,
  `owner` int(11) NOT NULL,
  `user_mark` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `user_marked`
--

INSERT INTO `user_marked` (`id`, `owner`, `user_mark`, `created_at`, `updated_at`) VALUES
(1, 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 3, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 3, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 3, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 1, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 1, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 1, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_question`
--

CREATE TABLE `user_question` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `questions_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `user_question`
--

INSERT INTO `user_question` (`id`, `user_id`, `questions_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2020-10-12 02:54:38', '2020-10-12 02:54:38'),
(2, 2, 2, '2020-10-12 03:50:03', '2020-10-12 03:50:03'),
(3, 3, 3, '2020-10-12 04:30:34', '2020-10-12 04:30:34'),
(4, 6, 4, '2020-10-14 01:07:01', '2020-10-14 01:07:01'),
(5, 7, 5, '2020-10-14 01:09:48', '2020-10-14 01:09:48'),
(6, 8, 6, '2020-10-14 01:11:53', '2020-10-14 01:11:53'),
(7, 9, 7, '2020-10-14 01:14:08', '2020-10-14 01:14:08'),
(8, 10, 8, '2020-10-14 01:17:32', '2020-10-14 01:17:32');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `admin_change_issue`
--
ALTER TABLE `admin_change_issue`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_id` (`admin_id`),
  ADD KEY `issue_deletada` (`issue_deletada`),
  ADD KEY `issue_editada` (`issue_editada`);

--
-- Índices para tabela `admin_delete_user`
--
ALTER TABLE `admin_delete_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_id` (`admin_id`),
  ADD KEY `user_deleted` (`user_deleted`);

--
-- Índices para tabela `admin_logs`
--
ALTER TABLE `admin_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin` (`admin`);

--
-- Índices para tabela `box`
--
ALTER TABLE `box`
  ADD PRIMARY KEY (`id`),
  ADD KEY `guest` (`guest`),
  ADD KEY `sender` (`sender`),
  ADD KEY `now` (`now`),
  ADD KEY `playlist` (`playlist`);

--
-- Índices para tabela `boxs_reports`
--
ALTER TABLE `boxs_reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `challenges`
--
ALTER TABLE `challenges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`),
  ADD KEY `issue` (`issue`);

--
-- Índices para tabela `dashboard_excludeds`
--
ALTER TABLE `dashboard_excludeds`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `playlist_excludeds` (`playlist_excludeds`);

--
-- Índices para tabela `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `issue`
--
ALTER TABLE `issue`
  ADD PRIMARY KEY (`id`),
  ADD KEY `owner` (`owner`);

--
-- Índices para tabela `issues_marked`
--
ALTER TABLE `issues_marked`
  ADD PRIMARY KEY (`id`),
  ADD KEY `issue_id` (`issue_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sender` (`sender`),
  ADD KEY `receiver` (`receiver`);

--
-- Índices para tabela `playlist`
--
ALTER TABLE `playlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `owner` (`owner`);

--
-- Índices para tabela `playlist_and_issue`
--
ALTER TABLE `playlist_and_issue`
  ADD PRIMARY KEY (`id`),
  ADD KEY `list` (`list`),
  ADD KEY `issue` (`issue`);

--
-- Índices para tabela `playlist_marked`
--
ALTER TABLE `playlist_marked`
  ADD PRIMARY KEY (`id`),
  ADD KEY `list_id` (`list_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices para tabela `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `owner` (`owner`);

--
-- Índices para tabela `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Índices para tabela `shared_learning`
--
ALTER TABLE `shared_learning`
  ADD PRIMARY KEY (`id`),
  ADD KEY `learning` (`learning`),
  ADD KEY `user_one` (`user_one`),
  ADD KEY `user_two` (`user_two`);

--
-- Índices para tabela `status_user`
--
ALTER TABLE `status_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices para tabela `user_marked`
--
ALTER TABLE `user_marked`
  ADD PRIMARY KEY (`id`),
  ADD KEY `owner` (`owner`),
  ADD KEY `user_mark` (`user_mark`);

--
-- Índices para tabela `user_question`
--
ALTER TABLE `user_question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `questions_id` (`questions_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `admin_change_issue`
--
ALTER TABLE `admin_change_issue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `admin_delete_user`
--
ALTER TABLE `admin_delete_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `admin_logs`
--
ALTER TABLE `admin_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `box`
--
ALTER TABLE `box`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `boxs_reports`
--
ALTER TABLE `boxs_reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `challenges`
--
ALTER TABLE `challenges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `dashboard_excludeds`
--
ALTER TABLE `dashboard_excludeds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `issue`
--
ALTER TABLE `issue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `issues_marked`
--
ALTER TABLE `issues_marked`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `playlist`
--
ALTER TABLE `playlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `playlist_and_issue`
--
ALTER TABLE `playlist_and_issue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `playlist_marked`
--
ALTER TABLE `playlist_marked`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `scores`
--
ALTER TABLE `scores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `shared_learning`
--
ALTER TABLE `shared_learning`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `status_user`
--
ALTER TABLE `status_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `user_marked`
--
ALTER TABLE `user_marked`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `user_question`
--
ALTER TABLE `user_question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `admin_change_issue`
--
ALTER TABLE `admin_change_issue`
  ADD CONSTRAINT `admin_change_issue_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `admin_change_issue_ibfk_2` FOREIGN KEY (`issue_deletada`) REFERENCES `issue` (`id`),
  ADD CONSTRAINT `admin_change_issue_ibfk_3` FOREIGN KEY (`issue_editada`) REFERENCES `issue` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `admin_delete_user`
--
ALTER TABLE `admin_delete_user`
  ADD CONSTRAINT `admin_delete_user_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `admin_delete_user_ibfk_2` FOREIGN KEY (`user_deleted`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `admin_logs`
--
ALTER TABLE `admin_logs`
  ADD CONSTRAINT `admin_logs_ibfk_1` FOREIGN KEY (`admin`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `box`
--
ALTER TABLE `box`
  ADD CONSTRAINT `box_ibfk_1` FOREIGN KEY (`guest`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `box_ibfk_2` FOREIGN KEY (`sender`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `box_ibfk_3` FOREIGN KEY (`now`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `box_ibfk_4` FOREIGN KEY (`playlist`) REFERENCES `playlist` (`id`);

--
-- Limitadores para a tabela `boxs_reports`
--
ALTER TABLE `boxs_reports`
  ADD CONSTRAINT `boxs_reports_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `challenges`
--
ALTER TABLE `challenges`
  ADD CONSTRAINT `challenges_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `challenges_ibfk_2` FOREIGN KEY (`issue`) REFERENCES `issue` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD CONSTRAINT `feedbacks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `issue`
--
ALTER TABLE `issue`
  ADD CONSTRAINT `issue_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `issues_marked`
--
ALTER TABLE `issues_marked`
  ADD CONSTRAINT `issues_marked_ibfk_1` FOREIGN KEY (`issue_id`) REFERENCES `issue` (`id`),
  ADD CONSTRAINT `issues_marked_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`sender`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `notifications_ibfk_2` FOREIGN KEY (`receiver`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `playlist`
--
ALTER TABLE `playlist`
  ADD CONSTRAINT `playlist_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `playlist_and_issue`
--
ALTER TABLE `playlist_and_issue`
  ADD CONSTRAINT `playlist_and_issue_ibfk_1` FOREIGN KEY (`list`) REFERENCES `playlist` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `playlist_and_issue_ibfk_2` FOREIGN KEY (`issue`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `playlist_marked`
--
ALTER TABLE `playlist_marked`
  ADD CONSTRAINT `playlist_marked_ibfk_1` FOREIGN KEY (`list_id`) REFERENCES `playlist` (`id`),
  ADD CONSTRAINT `playlist_marked_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `scores`
--
ALTER TABLE `scores`
  ADD CONSTRAINT `scores_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `shared_learning`
--
ALTER TABLE `shared_learning`
  ADD CONSTRAINT `shared_learning_ibfk_1` FOREIGN KEY (`learning`) REFERENCES `issue` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `shared_learning_ibfk_2` FOREIGN KEY (`user_one`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `shared_learning_ibfk_3` FOREIGN KEY (`user_two`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `status_user`
--
ALTER TABLE `status_user`
  ADD CONSTRAINT `status_user_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `user_marked`
--
ALTER TABLE `user_marked`
  ADD CONSTRAINT `user_marked_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_marked_ibfk_2` FOREIGN KEY (`user_mark`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `user_question`
--
ALTER TABLE `user_question`
  ADD CONSTRAINT `user_question_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_question_ibfk_2` FOREIGN KEY (`questions_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
