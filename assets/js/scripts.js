// Stick Header

window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	// const titleHeight = document.querySelector('.header').scrollHeight;

	if (header) {
		if (window.scrollY > 150) {
			header.classList.add('header--sticky');
		} else {
			header.classList.remove('header--sticky');
		}
	}
});

// (function () {
// 	// Popover
// 	$(function () {
// 		$('[data-toggle="popover"]').popover(options);
// 	});

// 	// Tooltip
// 	$(function () {
// 		$('[data-toggle="tooltip"]').tooltip(options);
// 	});
// })();

// Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});

// Botão de copiar podcast

const copyButton = document.querySelectorAll('.copy-to-clip');

copyButton.forEach(btn => {
	btn.addEventListener('click', () => {
		copyToClipboard(btn);
		// tooltipShow(btn);

		tooltipFeedback(btn);
	});
});

function copyToClipboard(e) {
	const textToCopy = e.getAttribute('data-link');
	const textarea = document.createElement('textarea');
	textarea.setAttribute('readonly', '');
	textarea.style.position = 'absolute';
	textarea.value = textToCopy;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
}
function tooltipFeedback(b) {
	let feedback = $('[data-toggle="tooltip"]');

	// feedback.tooltip('show');

	b.addEventListener('mouseout', () => {
		feedback.tooltip('hide');
	});
}


// Lightbox (insert the class "lightbox" into <figure>)

const imageToLightbox = document.querySelectorAll('.lightbox');

imageToLightbox.forEach(image => {
	image.addEventListener('click', () => {
		if (!image.classList.contains('lightbox--show')) {
			const getImage = image.querySelector('img');
			const getImageSrc = getImage.getAttribute('src');
			const imageLightbox = document.createElement('div');

			imageLightbox.classList.add('lightbox__image');

			document.body.appendChild(imageLightbox);
			imageLightbox.innerHTML = `<img src="${getImageSrc}"/>`;
			// console.log(getImageSrc);

			image.classList.add('lightbox--show');

			document.body.style.overflow = 'hidden';
			document.body.style.userSelect = 'none';

			closeLightbox(imageLightbox);
		}

		function closeLightbox(e) {
			const lightboxOpen = document.querySelector('.lightbox__image');
			e.addEventListener('click', () => {
				document.body.removeChild(e);
				image.classList.remove('lightbox--show');
				document.body.style.overflow = 'auto';
				document.body.style.userSelect = 'auto';
			});
		}
	});
});

// Boxes - inserir o título de acordo com o atributo

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
	const boxAttribute = box.getAttribute('data-box');

	const boxLabel = box.querySelector('.label');

	boxLabel.innerHTML = boxAttribute;
});

// Modal - Criação dos modais principais

const modalInfos = {
	creditos: {
		ariaLabel: 'creditos',
		modalSize: 'modal-lg',
		modalTitle: 'Créditos',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<span class="h5 mb-3 d-block">Ministério da Saúde</span>

					<div class="mb-5">
						<p class="mb-1">Nísia Trindade Lima</p>
						<p class="small text-muted"><em>Ministra</em></p>
					</div>

					<span class="h5 mb-3 d-block">Fundação Oswaldo Cruz – Fiocruz</span>
					
					<div class="mb-5">
						<p class="mb-1">Mario Moreira</p>
						<p class="small text-muted"><em>Presidente</em></p>
						<p class="mb-1">Cristiani Vieira Machado</p>
						<p class="small text-muted"><em>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</em></p>
					</div>

					<span class="h5 mb-3 d-block">Campus Virtual Fiocruz</span>

					<div class="mb-5">

						<p class="mb-1">Ana Cristina da Matta Furniel</p>
						<p class="small text-muted"><em>Coordenadora-geral</em></p>

						<p class="mb-1">Rosane Mendes</p>
						<p class="small text-muted"><em>Coordenadora-adjunta e Coordenadora da Plataforma Educare</em></p>
						
						<p class="mb-1">Adelia Araujo</p>
						<p class="small text-muted"><em>Coordenadora de produção</em></p>

						<p class="mb-1">Renata Bernardes David</p>
						<p class="small text-muted"><em>Gerente de produção</em></p>

						<p class="mb-1">Juliana Dutra</p>
						<p class="small text-muted"><em>Revisora técnica de conteúdo</em></p>

						<p class="mb-1">Isabela Schincariol</p>
						<p class="small text-muted"><em>Assessora de comunicação</em></p>
					
						<p class="mb-1">Alessandra Siqueira</p>
						<p class="small text-muted"><em>Designer Educacional</em></p>
					
						<span class="h6 mb-3 d-block">Design de Interface</span>
						
						<p class="mb-1">Aline Polycarpo</p>
						<p class="small text-muted"><em>UX/UI Designer</em></p>
						<p class="mb-1">Danilo Blum</p>
						<p class="small text-muted"><em>UX/UI Designer e Front-end</em></p>
						<p class="mb-1">Luciana Nunes</p>
						<p class="small text-muted"><em>UX/UI Designer</em></p>
						
						<span class="h6 mb-3 d-block">Recursos Audiovisuais</span>

						<p class="mb-1">Roberta Marinho Duarteo</p>
						<p class="small text-muted"><em>Locutora</em></p>
						
						<p class="mb-1">Bruno Athaydes</p>
						<p class="small text-muted"><em>Editor audiovisual</em></p>
						
						<span class="h6 mb-3 d-block">Ilustração</span>

						<p class="mb-1">Rachel Paterman</p>
						<p class="small text-muted"><em>Ilustradora</em></p>
		
											
						<span class="h6 mb-3 d-block">Recursos Educacionais</span>
						
						<p class="mb-1">Carmélia Brito</p>
						<p class="small text-muted"><em>Bibliotecária</em></p>

						<p class="mb-1">Maria Angélica Marcondes Drska</p>
						<p class="small text-muted"><em>Revisora ortográfica</em></p>

						<p class="mb-1">Natália Rasina</p>
						<p class="small text-muted"><em>Audiodescrição</em></p>
						
						<span class="h6 mb-3 d-block">Suporte Técnico de Tecnologia da Informação</span>
					
						<p class="mb-1">Bruno Alexandre de Oliveira</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>

						<p class="mb-1">Adriano Lourenço</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>

						<p class="mb-1">Orlando Terra</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>
					</div>

					<span class="h5 mb-3 d-block">Coordenação Acadêmica</span>
					
					<div class="mb-5">
						<p class="mb-1">Sergio Tavares de Almeida Rego</p>
						<p class="small text-muted"><em>Graduado em Medicina (UNIRIO), Mestre e Doutor em Saúde Coletiva (UERJ).</em></p>

						<p class="mb-1">Carmen Penido Monteiro</p>
						<p class="small text-muted"><em>Graduada em Ciências Biológicas (USU), Mestre e Doutora em Biologia Celular e Molecular (FIOCRUZ).</em></p>

						<p class="mb-1">Mariana Conceição de Souza</p>
						<p class="small text-muted"><em>Graduada em Ciências Biológicas Modalidade Médica (UNIRIO), Mestre em Ciências Morfológicas (UFRJ), Doutora em Biologia Celular e Molecular (FIOCRUZ).</em></p>

					
						<span class="h6 mb-3 d-block">Conteudistas</span>

						<p class="mb-1">Ângela Fernandes Esher Moritz</p>
						<p class="small text-muted"><em>Graduada em Ciências Sociais (UFRJ), Mestre e Doutora em Saúde Pública (FIOCRUZ).</em></p>

						<p class="mb-1">Carmen Penido Monteiro</p>
						<p class="small text-muted"><em>Graduada em Ciências Biológicas (USU), Mestre e Doutora em Biologia Celular e Molecular (FIOCRUZ).</em></p>

						<p class="mb-1">Claude Pirex</p>
						<p class="small text-muted"><em>Graduada em Medicina (Souza Marques), Mestre em Medicina Anatomia Patológica (UFRJ) e Doutora Ciências Biológicas (UFRJ).</em></p>

						<p class="mb-1">Letícia Figueira Freitas</p>
						<p class="small text-muted"><em>Graduada em Farmácia (UNESA) e Mestre em Saúde Pública em Planejamento e Gestão de Sistemas e Serviços de Saúde (FIOCRUZ).</em></p>

						<p class="mb-1">Mariana Conceição de Souza</p>
						<p class="small text-muted"><em>Graduada em Ciências Biológicas - Modalidade Médica (UNIRIO), Mestre em Ciências Morfológicas (UFRJ), Doutora em Biologia Celular e Molecular (FIOCRUZ).</em></p>

						<p class="mb-1">Pablo Dias Fortes</p>
						<p class="small text-muted"><em>Graduado em filosofia (UFRJ), Mestre em Educação (UFRJ) e Doutor em Bioética, Ética Aplicada e Saúde Coletiva (FIOCRUZ).</em></p>

						<p class="mb-1">Sergio Tavares de Almeida Rego</p>
						<p class="small text-muted"><em>Graduado em Medicina (UNIRIO), Mestre e Doutor em Saúde Coletiva (UERJ).</em></p>

						<p class="mb-1">Simone Auxiliadora Borges Oliveira</p>
						<p class="small text-muted"><em>Graduada em Nutrição (UFRJ), Mestre em Política e Gestão de Ciência, Tecnologia e Inovação em Saúde (FIOCRUZ) e Doutora em Informação e Comunicação em Saúde (FIOCRUZ).</em></p>

						<p class="mb-1">Thadeu Estevam Moreira Maramaldo Costa</p>
						<p class="small text-muted"><em>Graduado em Ciências Biológicas - Modalidade Médica (UNIRIO), Mestre em Vigilância Sanitária (FIOCRUZ) e Doutor em Biologia Celular e Molecular (FIOCRUZ). </em></p>
						

					
						<span class="h6 mb-3 d-block">Revisão Técnica</span>
						
						<p class="mb-1">Sergio Tavares de Almeida Rego</p>
						<p class="small text-muted"><em>Graduado em Medicina (UNIRIO), Mestre e Doutor em Saúde Coletiva (UERJ).</em></p>

						<p class="mb-1">Carmen Penido Monteiro</p>
						<p class="small text-muted"><em>Graduada em Ciências Biológicas (USU), Mestre e Doutora em Biologia Celular e Molecular (FIOCRUZ).</em></p>

						<p class="mb-1">Mariana Conceição de Souza</p>
						<p class="small text-muted"><em>Graduada em Ciências Biológicas - Modalidade Médica (UNIRIO), Mestre em Ciências Morfológicas (UFRJ) e Doutora em Biologia Celular e Molecular (FIOCRUZ).</em></p>

						<p class="mb-1">Mariana Dias Ribeiro</p>
						<p class="small text-muted"><em>Graduada em Ciências Biológicas - Modalidade Médica (UFRJ), Mestre e Doutora em Ciências - Educação, Gestão e Difusão em Biociências (UFRJ).</em></p>
					</div>
					
				</div>
			</div>
		`,
	},
	materialcomplementar: {
		ariaLabel: 'material-complementar',
		modalSize: 'modal-lg',
		modalTitle: 'Material Complementar',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<div class="list">
							<ol class="list-group list-group-numbered"> 
								<li class="list-group-item"><a href='https://doi.org/10.1590/interface.240246' target='_blank'>A crise ética da pesquisa clínica no Brasil: Lei n. 14.874/2024 e as flexibilizações das normativas brasileiras de proteção dos participantes.</a></li>

								<li class="list-group-item"><a href='https://doi.org/10.1590/1983-21172022240198' target='_blank'>O papel das revistas científicas na ética em pesquisa</a> </li>

								<li class="list-group-item"><a href='https://www.scielo.br/j/rk/a/CwkptrFQtTcJPpHKyhCxd9f/' target='_blank'>A regulação ética em pesquisa e sua repercussão no Serviço Social</a></li>

								<li class="list-group-item"><a href='https://doi.org/10.1590/S0100-55022010000200001' target='_blank'>Índice H, autoria e integridade na produção científica</a> </li>

								<li class="list-group-item"><a href='https://doi.org/10.1590/S0100-55022008000300001' target='_blank'>Conflitos de interesses e a produção científica</a> </li>

								<li class="list-group-item"><a href='https://www.sciencedirect.com/science/article/pii/S0264410X2200127X' target='_blank'>Revisão ética dos estudos de desafio humano da COVID-19: um workshop conjunto da HRA/OMS (em inglês)</a></li>

								<li class="list-group-item"><a href='https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30438-2/fulltext' target='_blank'>Estudos de desafio humano da COVID-19: questões éticas (em inglês)</a></li>

								<li class="list-group-item"><a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC11318787/' target='_blank'>Considerações éticas para estudos de evidências do mundo real (em inglês)</a></li>

								<li class="list-group-item"><a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC3601711/' target='_blank'>Ética em pesquisa em estudos do mundo real (em inglês)</a></li>
							</ol>
						</div>
					</div>
					
				</div>
			</div>
		`,
	},
	bibliografiaMod0: {
		ariaLabel: 'bibliografiaMod0',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia Módulo Introdutório',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<p>DIAS, M. C. <strong>Sobre nós: expandindo as fronteiras da moralidade.</strong> Rio de Janeiro: Pirilampo, 2016.</p>

						<p>FORTES, P. D.; REGO, S. <strong>Tem cabimento o que não é justo? A propósito da justificação dos juízos morais</strong>. Revista Bioética, v. 26, n. 1; 2018. Disponível em: <a href='https://revistabioetica.cfm.org.br/revista_bioetica/article/view/1653/1786' target='_blank'>https://revistabioetica.cfm.org.br/revista_bioetica/article/view/1653/1786</a>. Acesso em: 20 maio 2024.</p>

						<p>HABERMAS, J. <strong>A ética do discurso: obras escolhidas</strong>. v. 3. Lisboa: Edições 70, 2014.</p>

						<p>RAWLS, J. <strong>Uma teoria da justiça</strong>. São Paulo: Martins Fontes, 1997. Disponível em: <a href='https://marcosfabionuva.com/wp-content/uploads/2011/08/uma-teoria-da-justic3a7a.pdf' target='_blank'>https://marcosfabionuva.com/wp-content/uploads/2011/08/uma-teoria-da-justic3a7a.pdf</a>. Acesso em: 20 maio 2024.</p>

						<p>WESTON, Anthony. <strong>A construção do argumento</strong>. São Paulo: Martins Fontes, 2009.</p>
					</div>
					
				</div>
			</div>
		`,
	},
	bibliografiaMod1: {
		ariaLabel: 'bibliografiaMod1',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia Módulo 1',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<p>ACADEMIA BRASILEIRA DE CIÊNCIAS. <strong>Rigor e Integridade na condução da pesquisa científica</strong>. Guia de recomendações de práticas responsáveis. ABC, 2013. Disponível em: <a href='http://www.abc.org.br/IMG/pdf/doc-4311.pdf' target='_blank'>http://www.abc.org.br/IMG/pdf/doc-4311.pdf</a>. Acesso em: 12 nov. 2024.</p>

						<p>ALL EUROPEAN ACADEMIES. <strong>Código europeu de conduta para a integridade da investigação</strong>. Berlin: ALLEA, june 2024. Disponível em: <a href='https://allea.org/wp-content/uploads/2024/09/CoC2023-PT.pdf' target='_blank'>https://allea.org/wp-content/uploads/2024/09/CoC2023-PT.pdf</a>. Acesso em: 25 out. 2024.</p>

						<p>ALL EUROPEAN ACADEMIES. <strong>The European code of conduct for research integrity</strong>. Berlin: ALLEA, 2017. Disponível em: <a href='https://www.allea.org/wp-content/uploads/2017/05/ALLEA-European-Code-of-Conduct-for-Research-Integrity-2017.pdf' target='_blank'>https://www.allea.org/wp-content/uploads/2017/05/ALLEA-European-Code-of-Conduct-for-Research-Integrity-2017.pdf</a>. Acesso em: 12 nov. 2024.</p>

						<p>BAKER, Monya. <strong>Is There a Reproducibility Crisis?</strong> Nature, v. 533, 26 maio 2016. Disponível em: <a href='https://www.nature.com/news/polopoly_fs/1.19970!/menu/main/topColumns/topLeftColumn/pdf/533452a.pdf' target='_blank'>https://www.nature.com/news/polopoly_fs/1.19970!/menu/main/topColumns/topLeftColumn/pdf/533452a.pdf</a>. Acesso em: 20 maio 2024.</p>

						<p>BRASIL. Ministério da Ciência, Tecnologia e Inovação. Conselho Nacional de Desenvolvimento Científico e Tecnológico. <strong>Diretrizes</strong>. Disponível em: <a href='http://memoria2.cnpq.br/web/guest/diretrizes/' target='_blank'>http://memoria2.cnpq.br/web/guest/diretrizes/</a>. Acesso em: 20 out. 2024.</p>

						<p>CENTER FOR OPEN SCIENCE. <strong>Reproducibility Project: Cancer Biology</strong>. Disponível em: <a href='https://www.cos.io/rpcb' target='_blank'>https://www.cos.io/rpcb</a>. Acesso em: 20 out. 2024.</p>

						<p>COMMITTEE ON PUBLICATION ETHICS. <strong>Discussion document: authorship</strong>. Disponível em: COPE_DD_A4_Authorship_SEPT19_SCREEN_AW.pdf (<a href='https://publicationethics.org/sites/default/files/COPE_DD_A4_Authorship_SEPT19_SCREEN_AW.pdf' target='_blank'>publicationethics.org</a>). Acesso em: 20 out. 2024.</p>

						<p>COMMITTEE ON PUBLICATION ETHICS. <strong>Guidelines on Good Publication Practice</strong>. The COPE Report, 1999. Disponível em: <a href='https://publicationethics.org/files/u7141/1999pdf13.pdf' target='_blank'>https://publicationethics.org/files/u7141/1999pdf13.pdf</a>. Acesso em: 21 out. 2024.</p>

						<p>DORA. <strong>Declaração de São Francisco sobre Avaliação de Pesquisa</strong>. Disponível em: <a href='https://sfdora.org/wp-content/uploads/2020/12/DORA_Brazilian-Portuguese.pdf' target='_blank'>https://sfdora.org/wp-content/uploads/2020/12/DORA_Brazilian-Portuguese.pdf</a>. Acesso em: 21 out. 2024.</p>

						<p>GLOBAL RESEARCH COUNCIL. <strong>Statement of Principles for Research Integrity</strong>. Disponível em : <a href='https://www.globalresearchcouncil.org/fileadmin/documents/GRC_Publications/grc_statement_principles_research_integrity_FINAL.pdf' target='_blank'>https://www.globalresearchcouncil.org/fileadmin/documents/GRC_Publications/grc_statement_principles_research_integrity_FINAL.pdf</a>. Acesso em: 20 maio 2024.</p>

						<p>INSTITUTE OF MEDICINE NATIONAL RESEARCH COUNCL. <strong>Integrity in Scientific Research: creating an environment that promotes responsible conduct</strong>. Washington, D. C., 2002. The National Academic Press, 2002. Disponível em: <a href='https://nap.nationalacademies.org/read/10430/chapter/1#ii' target='_blank'>https://nap.nationalacademies.org/read/10430/chapter/1#ii</a>. Acesso em: 20 maio 2024.</p>

						<p>IOANNIDIS, John P. A. <strong>Why Most Published Research Findings are False</strong>. Plos Medicine, v. 19, n. 8, 2005. Disponível em: <a href='https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0020124' target='_blank'>https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0020124</a>. Acesso em: 20 maio 2024.</p>

						<p>KALICHMAN, Michael. <strong>A modest proposal to move RCR education out of the classroom and into research</strong>. J Microbiol Biol Educ., v. 15, n. 2, p. 93-95, 2014. Disponível em: <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC4278527/' target='_blank'>https://pmc.ncbi.nlm.nih.gov/articles/PMC4278527/</a>. Acesso em: 25 out. 2024.</p>

						<p>KRIMSKY, S. <strong>Conflito de interesses na universidade pós-acadêmica</strong>. Folha de São Paulo, São Paulo, 28 set. 2003. Disponível em <a href='https://www1.folha.uol.com.br/fsp/ciencia/fe2809200301.htm' target='_blank'>https://www1.folha.uol.com.br/fsp/ciencia/fe2809200301.htm</a> Acesso em: 20 maio 2024.</p>

						<p>NASSI-CALÒ, Lilian. <strong>Avaliação sobre a reprodutibilidade de resultados de pesquisa traz mais perguntas que respostas</strong>. Scielo em Perspectiva, 08 fev. 2017. Disponível em: <a href='https://blog.scielo.org/blog/2017/02/08/avaliacao-sobre-a-reprodutibilidade-de-resultados-de-pesquisa-traz-mais-perguntas-que-respostas/' target='_blank'>https://blog.scielo.org/blog/2017/02/08/avaliacao-sobre-a-reprodutibilidade-de-resultados-de-pesquisa-traz-mais-perguntas-que-respostas/</a>. Acesso em: 21 out. 2024.</p>

						<p>PALÁCIOS, M.; REGO, S. E.; LINO, M. H. <strong>Promoção e propaganda de medicamentos em ambientes de ensino: elementos para o debate</strong>. Interface Comunicação Saúde Educação, v. 12, n. 27, p.893-905, dez. 2008. </p>

						<p>REDE BRASILEIRA DE REPRODUTIVIDADE. Disponível em: <a href='https://www.reprodutibilidade.org/' target='_blank'>https://www.reprodutibilidade.org/</a>. Acesso em: 25 out. 2024.</p>

						<p>REGO, S. <strong>Escola não é lugar de propaganda</strong>. Editorial. Rev. bras. educ. med., v. 28 n. 01, 2004. Disponível em: <a href='https://www.scielo.br/j/rbem/a/N6pBtXMkmqfkVKfV96vQZRK/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/rbem/a/N6pBtXMkmqfkVKfV96vQZRK/?format=pdf&lang=pt</a>. Acesso em: 20 maio 2024.</p>

						<p>REGO, S. <strong>O processo de socialização profissional na medicina</strong>. In: MACHADO, M. H. (org). Profissões de saúde: uma abordagem sociológica. Rio de Janeiro: Editora FIOCRUZ, 1995. p. 119-132. Disponível em: <a href='http://books.scielo.org/id/t4ksj/epub/machado-9788575416075.epub' target='_blank'>http://books.scielo.org/id/t4ksj/epub/machado-9788575416075.epub</a>. Acesso em: 20 maio 2024.</p>

						<p>SILVA, R., <em>et al</em>. <strong>Perfil e financiamento da pesquisa em saúde desencadeada pela pandemia da COVID-19 no Brasil</strong>. Vigilância Sanitária Em Debate: Sociedade, Ciência & Tecnologia, v. 8, n. 2, p. 28-38, 2020. </p>

						<p>SIS Net Policy brief in research Integrity, nov. 2018 <a href='https://www.sisnetwork.eu/about/news/policy-brief-on-research-integrity' target='_blank'>https://www.sisnetwork.eu/about/news/policy-brief-on-research-integrity</a>. Acesso em: 20 maio 2024.</p>

						<p>SOMERVILLE, M. <strong>A postmodern moral tale: the ethics of research relationships</strong>. Nat Rev Drug Disco, v. 1, p. 316-320, 2002. Disponível em: <a href='https://doi.org/10.1038/nrd774' target='_blank'>https://doi.org/10.1038/nrd774</a>. Acesso em: 20 maio 2024.</p>

						<p>STEINMAN, M. A.; SHLIPAK, M. G.; MCPHEE, S. J. <strong>Of principles and pens: attitudes and practices of medicine housestaff toward pharmaceutical industry promotions</strong>. Am J Med., v. 110, n. 7, p. 551-7, May 2001.</p>

						<p>STERNECK, Nicholas H. <strong>Introduction to the Responsible Conduct of Research (ORI)</strong>. Washington, D.C.: U.S. Department of Health and Human Services, 2007. Disponível em: <a href='https://ori.hhs.gov/sites/default/files/2018-04/rcrintro.pdf' target='_blank'>https://ori.hhs.gov/sites/default/files/2018-04/rcrintro.pdf</a>. Acesso  em: 20 maio 2024. </p>

						<p>THE OFFICE OF RESEARCH INTEGRILY. <strong>Federal Research Misconduct Policy</strong>, Federal Register, v. 65, n. 235, p. 76260-76264, 06 dez. 2000. Disponível em: <a href='https://ori.hhs.gov/federal-research-misconduct-policy' target='_blank'>https://ori.hhs.gov/federal-research-misconduct-policy</a>. Acesso em: 20 maio 2024.</p>

						<p>THOMPSON, D. <strong>Understanding financial conflicts of interest</strong>. N Engl J Med., v. 329, n. 8, p. 573-576, 1993.</p>

						<p>UNIVERSIDADE DO ESTADO DE SANTA CATARINA. <strong>Orientações do COPE para editores de periódicos</strong>. Florianópolis: UDESC, 2023. Disponível em: <a href='https://www.udesc.br/arquivos/udesc/id_cpmenu/15958/Orienta__es_COPE__2023_16836447006564_15958.pdf' target='_blank'>https://www.udesc.br/arquivos/udesc/id_cpmenu/15958/Orienta__es_COPE__2023_16836447006564_15958.pdf</a>. Acesso em: 25 out. 2024.</p>

						<p>WARDE, I. <strong>L’université américaine vampirisée par les marchands</strong>. Le Monde Diplomatique, mars 2001. Disponível em: <a href='https://www.monde-diplomatique.fr/2001/03/WARDE/1839' target='_blank'>https://www.monde-diplomatique.fr/2001/03/WARDE/1839</a>. Acesso em: 20 maio 2024.</p>

						<p>WELLCOME. <strong>What researchers think about the culture they work in</strong>. London: Wellcome Trust, 2020. Disponível em: <a href='https://wellcome.org/sites/default/files/what-researchers-think-about-the-culture-they-work-in.pdf' target='_blank'>https://wellcome.org/sites/default/files/what-researchers-think-about-the-culture-they-work-in.pdf</a>. Acesso em: 20 out. 2024.</p>

						<p>WORLD CONFERENCES ON RESEARCH INTEGRITY. <strong>The Hong Kong Principles</strong>. Disponível em: <a href='https://www.wcrif.org/hong-kong-principles' target='_blank'>https://www.wcrif.org/hong-kong-principles</a>. Acesso em: 20 maio 2024.</p>
					</div>
					
				</div>
			</div>
		`,
	},
	bibliografiaMod2: {
		ariaLabel: 'bibliografiaMod2',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia Módulo 2',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<p>ARAÚJO, Laís Záu Serpa de. <strong>Aspectos éticos da pesquisa científica</strong>. Pesquisa Odontológica Brasileira, v. 17, Supl. 1, p. 57-63, 2003. Disponível em: <a href='https://www.scielo.br/j/pob/a/MZVSYxKncfrNnsKxbjg5Gxr/?lang=pt' target='_blank'>https://www.scielo.br/j/pob/a/MZVSYxKncfrNnsKxbjg5Gxr/?lang=pt</a>. Acesso em: 12 nov. 2024.</p>

						<p>AREOSA, João. <strong>O risco nas ciências sociais: Uma visão crítica ao paradigma dominante</strong>. Revista Angolana de Sociologia, Luanda, n. 5/6, p. 11-33, 2010.</p>

						<p>ASSEMBLEIA MÉDICA MUNDIAL. <strong>Declaração de Helsinki I</strong>. 18a. Assembleia Médica Mundial, Helsinki, Finlândia 1964. Disponível em: <a href='https://www.ufrgs.br/bioetica/helsin1.htm' target='_blank'>https://www.ufrgs.br/bioetica/helsin1.htm</a>. Acesso em: 21 out. 2024.</p>

						<p>BOSI, Maria Lúcia Magalhães. <strong>Problematizando o conceito de risco em diretrizes éticas para pesquisas em ciências humanas e sociais na Saúde Coletiva</strong>. Ciência & Saúde Coletiva, v. 20, n. 9, p. 2675-2682, 2025. </p>

						<p>BEECHER, H. <strong>Ética e pesquisa clínica</strong>. The New England Journal of Medicine, v. 274, n. 24, p. 1354-1350, 1966. Disponível em: <a href='https://www.nejm.org/doi/full/10.1056/NEJM196606162742405' target='_blank'>https://www.nejm.org/doi/full/10.1056/NEJM196606162742405</a>. Acesso em: 25 out. 2024.</p>

						<p>BRASIL. Conselho Nacional de Saúde. <strong>Resolução nº 001, 13 jun. 1988</strong>. Revogada: Aprova as Normas de Pesquisa em Saúde. Estabelece aspectos éticos em pesquisa em seres humanos. Revoga a portaria 16 de 27.11.81, da Divisão Nacional de Vigilância Sanitária de Medicamentos que instituiu o termo de consentimento de risco (TCR); Revogada pela Res 196/96. Disponível em: <a href='https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/1988/resolucao-no-001.pdf/vie' target='_blank'>https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/1988/resolucao-no-001.pdf/vie</a>w. Acesso em: 20 out. 2024.</p>

						<p>BRASIL. Conselho Nacional de Saúde. <strong>Resolução nº 196/96</strong>. Diretrizes e Normas Regulamentadoras de Pesquisas Envolvendo Seres Humanos. Disponível em: <a href='https://www.ufrgs.br/bioetica/res19696.htm' target='_blank'>https://www.ufrgs.br/bioetica/res19696.htm</a> Acesso em: 25 out. 2024.</p>

						<p>BRASIL. Conselho Nacional de Saúde. <strong>Resolução nº 466/12</strong>. Aprova as diretrizes e normas regulamentadoras de pesquisas envolvendo seres humanos e revoga as Resoluções CNS nos. 196/96, 303/2000 e 404/2008. Diário Oficial da União, 13 jun. 2013, Seção 1. Disponível em: <a href='https://www.inca.gov.br/sites/ufu.sti.inca.local/files//media/document//resolucao-cns-466-12.pdf' target='_blank'>https://www.inca.gov.br/sites/ufu.sti.inca.local/files//media/document//resolucao-cns-466-12.pdf</a> . Acesso em: 21 out. 2024.</p>

						<p>BRASIL. Conselho Nacional de Saúde. <strong>Norma Operacional nº 001, de 2013</strong>. Organização e funcionamento do Sistema CEP/Conep e procedimentos para submissão, avaliação e acompanhamento do desenvolvimento da pesquisa envolvendo seres humanos no Brasil.. Disponível em: <a href='https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/sobre-o-conselho/camaras-tecnicas-e-comissoes/conep/legislacao/norma/norma-operacional-no-001-de-2013.pdf/view' target='_blank'>https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/sobre-o-conselho/camaras-tecnicas-e-comissoes/conep/legislacao/norma/norma-operacional-no-001-de-2013.pdf/view</a>. Acesso em: 25 out. 2024.</p>

						<p>BRASIL. Conselho Nacional de Saúde. Comissão Nacional de Ética em Pesquisa (CONEP/CNS/MS. <strong>Manual de pendências frequentes em protocolos de pesquisa clínica de 2015</strong>. Disponível em: <a href='https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/sobre-o-conselho/camaras-tecnicas-e-comissoes/conep/publicacoes/manual-de-pendencias-frequentes-em-protocolos-de-pesquisa-clinica-de-2015.pdf/view' target='_blank'>https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/sobre-o-conselho/camaras-tecnicas-e-comissoes/conep/publicacoes/manual-de-pendencias-frequentes-em-protocolos-de-pesquisa-clinica-de-2015.pdf/view</a>. Acesso em: 21 out. 2024.</p>

						<p>BRASIL. Conselho Nacional de Saúde. <strong>Resolução nº 506, de 03 fev. 2016</strong>. Em Vigor: Aprova a seguinte Resolução referente ao processo de acreditação de comitês de ética em Pesquisa (CEP) que compõem o Sistema CEP/Conep. Disponível em: <a href='https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2016/resolucao-no-506.pdf/view' target='_blank'>https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2016/resolucao-no-506.pdf/view</a>. Acesso em: 25 out. 2024.</p>

						<p>BRASIL. Conselho Nacional de Saúde. <strong>Resolução nº 510, de 07 abr. 2016</strong>. Em Vigor: Esta Resolução dispõe sobre as normas aplicáveis a pesquisas em Ciências Humanas e Sociais cujos procedimentos metodológicos envolvam a utilização de dados diretamente obtidos com os participantes ou de informações identificáveis ou que possam acarretar riscos maiores do que os existentes na vida cotidiana, na forma definida nesta Resolução. Disponível em: <a href='https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2016/resolucao-no-510.pdf/view' target='_blank'>https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2016/resolucao-no-510.pdf/view</a>. Acesso em: 25 out. 2024.</p>

						<p>BRASIL. Conselho Nacional de Saúde. <strong>Resolução nº 563, de 10 nov. 2017</strong>. Homologada: Esta resolução regulamenta o direito do participante de pesquisa ao acesso pós-estudo em protocolos de pesquisa clínica destinados aos pacientes diagnosticados com doenças ultrarraras. Disponível em: <a href='https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2017/resolucao-no-563.pdf/view' target='_blank'>https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2017/resolucao-no-563.pdf/view</a>. Acesso em: 25 out. 2024.</p>

						<p>BRASIL. Conselho Nacional de Saúde. <strong>Resolução nº 580, de 22 mar. 2018</strong>. Homologada: Regulamenta o disposto no item XIII.4 da Resolução CNS nº 466, de 12 de dezembro de 2012, que estabelece que as especificidades éticas das pesquisas de interesse estratégico para o Sistema Único de Saúde (SUS) serão contempladas em Resolução específica, e dá outras providências. Disponível em: <a href='https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2018/resolucao-no-580.pdf/view' target='_blank'>https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2018/resolucao-no-580.pdf/view</a>. Acesso em: 21 out. 2024.</p>

						<p>BRASIL. Conselho Nacional de Saúde. <strong>Resolução nº 304, 09 ago. 2000</strong>. Não Homologada: Aprova as seguintes Normas para Pesquisas Envolvendo Seres Humanos – Área de Povos Indígenas. Disponível em: <a href='https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2000/resolucao-no-304.pdf/view' target='_blank'>https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2000/resolucao-no-304.pdf/view</a>. Acesso em: 25 out. 2024.</p>

						<p>BRASIL. Conselho Nacional de Saúde. <strong>Resolução nº 647, de 12 out. 2020</strong>. Homologada: Dispõe sobre as regras referentes à regulamentação do processo de designação e atuação dos membros de CEP indicados por entidades do controle social. Disponível em: <a href='https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2020/resolucao-no-647.pdf/view' target='_blank'>https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2020/resolucao-no-647.pdf/view</a>. Acesso em: 20 out. 2024.</p>

						<p>BRASIL. Lei nº 14.874, de 28 de maio de 2024. Dispõe sobre a pesquisa com seres humanos e institui o Sistema Nacional de Ética em Pesquisa com Seres Humanos. Brasília DF: Presidência da República. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14874.htm' target='_blank'>https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14874.htm</a>. Acesso em: 27 nov. 2024. </p>

						<p>BRASIL. Conselho Nacional de Saúde. Comissão Nacional de Ética em Pesquisa. <strong>Ofício Circular nº 2/2021/CONEP/SECNS/MS</strong>. Brasília: 24 fev. 2021. Assunto: Orientações para procedimentos em pesquisas com qualquer etapa em ambiente virtual. Disponível em: <a href='https://edisciplinas.usp.br/pluginfile.php/7710033/mod_resource/content/1/Oficio_Circular_2_24fev2021.pdf' target='_blank'>https://edisciplinas.usp.br/pluginfile.php/7710033/mod_resource/content/1/Oficio_Circular_2_24fev2021.pdf</a>. Acesso em: 21 out. 2024.</p>

						<p>BRASIL. Conselho Nacional de Saúde. <strong>Resolução nº 674, de 6 maio 2022</strong>. Homologada: Dispõe sobre a tipificação da pesquisa e a tramitação dos protocolos de pesquisa no Sistema CEP/Conep. Disponível em: <a href='https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2022/resolucao-no-674.pdf/view' target='_blank'>https://www.gov.br/conselho-nacional-de-saude/pt-br/acesso-a-informacao/legislacao/resolucoes/2022/resolucao-no-674.pdf/view</a>. Acesso em: 25 out. 2024.</p>

						<p>BRASIL. Ministério da Saúde. Conselho Nacional de Saúde. Comissão Nacional de Ética em Pesquisa. <strong>Cartilha dos Direitos dos Participantes de Pesquisa</strong>. Versão 1.0. Brasília: CONEP/CNS/MS, 2020. Disponível em: <a href='http://cephumanas.sites.uff.br/wp-content/uploads/sites/337/2023/05/Cartilha-dos-Direitos-dos-Participantes-de-Pesquisa-2020-1.pdf' target='_blank'>http://cephumanas.sites.uff.br/wp-content/uploads/sites/337/2023/05/Cartilha-dos-Direitos-dos-Participantes-de-Pesquisa-2020-1.pdf</a>. Acesso em: 25 out. 2024.</p>

						<p>CASTIEL, L. D. 1999. A Medida do Possível... saúde, risco e tecnobiociências. Rio de Janeiro: Contracapa; Editora Fiocruz, 1999. 204 p. <a href='https://static.scielo.org/scielobooks/ynw9g/pdf/castiel-9788575412701.pdf' target='_blank'>https://static.scielo.org/scielobooks/ynw9g/pdf/castiel-9788575412701.pdf</a>. Acesso em: 12 nov. 2024.</p>

						<p>CÓDIGO DE NUREMBERG. <strong>Experimentação Humana</strong>. 1947. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/codigo_nuremberg.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/codigo_nuremberg.pdf</a>. Acesso em: 21 out. 2024.</p>

						<p>CONSELHO REGIONAL DE MEDICINA DO ESTADO DE SÃO PAULO. <strong>Código de Nuremberg</strong>. São Paulo: CREMESP, 30 set. 2002. Disponível em: <a href='http://www.bioetica.org.br/?siteAcao=DiretrizesDeclaracoesIntegra&id=2' target='_blank'>http://www.bioetica.org.br/?siteAcao=DiretrizesDeclaracoesIntegra&id=2</a> . Acesso em: 25 out. 2024.</p>

						<p>DINIZ, D.; GUERRIERO, I. <strong>Ética na pesquisa social: desafios ao modelo biomédico</strong>. RECIIS – R. Eletr. de Com. Inf. Inov. Saúde, Rio de Janeiro, v.2, Sup.1, p. S78-S90, 2008.</p>

						<p>FUNDAÇÃO OSWALDO CRUZ. Instituto Oswaldo Cruz. <strong>Termo de Consentimento Livre e Esclarecido</strong>. Disponível em: <a href='https://www.ioc.fiocruz.br/sites/default/files/orientacoes_para_redacao_do_tcle_v2.1_0.pdf' target='_blank'>https://www.ioc.fiocruz.br/sites/default/files/orientacoes_para_redacao_do_tcle_v2.1_0.pdf</a>.  Acesso em: 17 out. 2024.</p>

						<p>GOLDIM, José Roberto. <strong>Diretrizes e Normas em Pesquisa em Saúde</strong>. Disponível em: <a href='https://www.ufrgs.br/bioetica/aleman31.htm' target='_blank'>https://www.ufrgs.br/bioetica/aleman31.htm</a> . Acesso em: 20 out. 2024.</p>

						<p>GOLDIM, José Roberto. <strong>O Caso Tuskegee: quando a ciência se torna eticamente inadequada</strong>. Disponível em: <a href='https://www.ufrgs.br/bioetica/tueke2.htm' target='_blank'>https://www.ufrgs.br/bioetica/tueke2.htm</a> Acesso em: 20 out. 2024.</p>

						<p>KOTTOW, Miguel. “<strong>História da ética em pesquisa com seres humanos”</strong>. RECIIS –R. Eletr. de Com. Inf. Inov. Saúde, Rio de Janeiro, v. 2, Sup.1, p. S7-S18, 2008.</p>

						<p>MINAYO, Maria Cecília de Souza; GUERRIERO, Iara Coelho Zito. <strong>Reflexividade como éthos da pesquisa qualitativa</strong>. Ciência & Saúde Coletiva, v. 19, n. 4, p. 1103-1112. Disponível em: <a href='http://www.scielo.br/j/csc/a/DgfNdVrZzZbN7rKTSQ8v4qR/?lang=pt' target='_blank'>http://www.scielo.br/j/csc/a/DgfNdVrZzZbN7rKTSQ8v4qR/?lang=pt</a>. Acesso em: 7 maio 2024.</p>

						<p>PALÁCIOS, M.; REGO, S.; SCHRAMM, F. R. <strong>A eticidade da pesquisa em seres humanos</strong>. Escola Nacional de Saúde Pública. Comitê de Ética em Pesquisa. Rio de Janeiro: ENSP, 2001. Disponível em: <a href='https://www.fct.unesp.br/Home/Administracao/TecnicaAcademica/Comite%20de%20Etica%20-%20Eticidade.pdf' target='_blank'>https://www.fct.unesp.br/Home/Administracao/TecnicaAcademica/Comite%20de%20Etica%20-%20Eticidade.pdf</a>. Acesso em: 12 nov. 2014.</p>

						<p>PLATAFORMA BRASIL. Disponível em: <a href='https://plataformabrasil.saude.gov.br/login.jsf' target='_blank'>https://plataformabrasil.saude.gov.br/login.jsf</a> . Acesso em: 25 out. 2024.</p>

						<p>U.S. DEPARTMENT OF HEALTH AND HUMAN SERVICES. Office for Human Research Protections. <strong>The Belmont Report</strong>. 18 Apr. 1979. Disponível em: <a href='https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html' target='_blank'>https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html</a>. Acesso em: 25 out. 2024.</p>

						<p>SCHRAMM, F. R.; PALÁCIOS, M.; REGO, S. <strong>O modelo bioético principialista na análise da moralidade da pesquisa científica envolvendo seres-humanos ainda é satisfatório?</strong> Ciência & Saúde Coletiva, v. 13, n. 2, p. 361-370, 2008. Disponível em: <a href='https://www.scielo.br/j/csc/a/4yDHmDXND4PCMbR6BBSzgNN/?lang=pt' target='_blank'>https://www.scielo.br/j/csc/a/4yDHmDXND4PCMbR6BBSzgNN/?lang=pt</a>. Acesso em: 12 nov. 2024.</p>
					</div>
				</div>
			</div>
		`,
	},
	bibliografiaMod3: {
		ariaLabel: 'bibliografiaMod3',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia Módulo 3',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<p>ARRIVE Guidelines. <strong>Diretrizes ARRIVE 2.0</strong>. Disponível em: <a href='https://arriveguidelines.org/sites/arrive/files/documents/ARRIVE%20guidelines%202.0%20-%20Portuguese.pdf' target='_blank'>https://arriveguidelines.org/sites/arrive/files/documents/ARRIVE%20guidelines%202.0%20-%20Portuguese.pdf</a>. Acesso em: 25 out. 2024.</p>

						<p>BRASIL. <strong>Lei n.º 11.794, de 8 de outubro de 2008</strong>. Regula o uso científico de animais e revoga a Lei n.º 6.638, de 8 de maio de 1979. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/Lei/L11794.htm' target='_blank'>https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/Lei/L11794.htm</a>. Acesso em: 22 nov. 2024.</p>

						<p>BRASIL. Ministério da Ciência, Tecnologia e Inovações. <strong>RENAMA - Rede Nacional de Métodos Alternativos</strong>. Disponível em: <a href='https://antigo.mctic.gov.br/mctic/opencms/ciencia/SEPED/Saude/renama/renama.html' target='_blank'>https://antigo.mctic.gov.br/mctic/opencms/ciencia/SEPED/Saude/renama/renama.html</a>. Acesso em: 20 out. 2024.</p>

						<p>BRASIL. Ministério da Ciência, Tecnologia e Inovações. <strong>Métodos Alternativos reconhecidos pelo Concea</strong>. Disponível em: <a href='https://www.gov.br/mcti/pt-br/composicao/conselhos/concea/paginas/publicacoes-legislacao-e-guia/metodos-alternativos-reconhecidos-pelo-concea' target='_blank'>https://www.gov.br/mcti/pt-br/composicao/conselhos/concea/paginas/publicacoes-legislacao-e-guia/metodos-alternativos-reconhecidos-pelo-concea</a>. Acesso em: 21 out. 2024.</p>

						<p>CANADIAN COUNCIL ON ANIMAL CARE (CCAC). <strong>CCAC animal data report 2022</strong>. Disponível em: <a href='https://ccac.ca/Documents/AUD/CCAC_Animal_Data_Report_2022.pdf' target='_blank'>https://ccac.ca/Documents/AUD/CCAC_Animal_Data_Report_2022.pdf</a>. Acesso em: 22 nov. 2024.</p>

						<p>INSTITUTO NACIONAL DE CÂNCER (INCA). <strong>Fases de desenvolvimento de um novo medicamento</strong>. 26 out. 2022. Disponível em: <a href='https://www.gov.br/inca/pt-br/assuntos/pesquisa/ensaios-clinicos/fases-de-desenvolvimento-de-um-novo-medicamento' target='_blank'>https://www.gov.br/inca/pt-br/assuntos/pesquisa/ensaios-clinicos/fases-de-desenvolvimento-de-um-novo-medicamento</a>. Acesso em: 22 nov. 2024.</p>

						<p>ORGANISATION FOR ECONOMIC CO-OPERATION AND DEVELOPMENT (OECD). <strong>Integrated Approaches to Testing and Assessment</strong>. Disponível em: <a href='https://www.oecd.org/en/topics/sub-issues/assessment-of-chemicals/integrated-approaches-to-testing-and-assessment.html' target='_blank'>https://www.oecd.org/en/topics/sub-issues/assessment-of-chemicals/integrated-approaches-to-testing-and-assessment.html</a>. Acesso em: 25 out. 2024.</p>

						<p>REVISTA GALILEU. <strong>Medicações não precisam mais ser testadas em animais antes de humanos nos EUA</strong>. Disponível em: <a href='https://revistagalileu.globo.com/saude/noticia/2023/01/medicacoes-nao-precisam-mais-ser-testadas-em-animais-antes-de-humanos-nos-eua.ghtml' target='_blank'>https://revistagalileu.globo.com/saude/noticia/2023/01/medicacoes-nao-precisam-mais-ser-testadas-em-animais-antes-de-humanos-nos-eua.ghtml</a>. Acesso em: 25 out. 2024.</p>

						<p>UNDERSTANDING ANIMAL RESEARCH. <strong>Understanding Animal Research</strong>. Disponível em: <a href='https://www.understandinganimalresearch.org.uk/' target='_blank'>https://www.understandinganimalresearch.org.uk/</a>. Acesso em: 21 out. 2024.</p>

						<p>UNITED STATES. Senate. 117th Cong., 2d Sess. <strong>Purpose: In the nature of a substitute</strong>. Disponível em: <a href='https://www.appropriations.senate.gov/imo/media/doc/JRQ121922.PDF' target='_blank'>https://www.appropriations.senate.gov/imo/media/doc/JRQ121922.PDF</a>. Acesso em: 20 out. 2024.</p>
					</div>
				</div>
			</div>
		`,
	},
	bibliografiaMod4: {
		ariaLabel: 'bibliografiaMod4',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia Módulo 4',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<p>AVALIAÇÃO: Revista da Avaliação da Educação Superior. s.d. <strong>Política de Ética e Más condutas, Errata e Retratação</strong>. Disponível em: <a href='https://submission.scielo.br/index.php/aval/mascondutaerrataretratacao' target='_blank'>https://submission.scielo.br/index.php/aval/mascondutaerrataretratacao</a>. Acesso em: 21 out. 2024.</p>

						<p>CAPES. <strong>Acordos transformativos são apresentados em Conferência Livre</strong>. Gov.br, 11 abr. 2024. Disponível em: <a href='https://www.gov.br/capes/pt-br/assuntos/noticias/acordos-transformativos-sao-apresentados-em-conferencia-livre' target='_blank'>https://www.gov.br/capes/pt-br/assuntos/noticias/acordos-transformativos-sao-apresentados-em-conferencia-livre</a>. Acesso em: 21 out. 2024.</p>

						<p>CAPES, <strong>Manifesto de Leiden</strong>. 2015. Disponível em: <a href='https://www.gov.br/capes/pt-br/centrais-de-conteudo/2782015-principios-do-manifesto-leiden-pdf' target='_blank'>https://www.gov.br/capes/pt-br/centrais-de-conteudo/2782015-principios-do-manifesto-leiden-pdf</a> . Acesso em: 25 out. 2024.</p>

						<p>CLINIO, Anne. <strong>Conferência Livre na Fiocruz debate “Acesso Aberto: Possibilidades e Limites dos Acordos Transformativos e APCs”</strong>. Portal da Fiocruz, 01 abr. 2024. Disponível em: <a href='https://portal.fiocruz.br/noticia/2024/04/conferencia-livre-na-fiocruz-debate-acesso-aberto-possibilidades-e-limites-dos' target='_blank'>https://portal.fiocruz.br/noticia/2024/04/conferencia-livre-na-fiocruz-debate-acesso-aberto-possibilidades-e-limites-dos</a>. Acesso em: 25 out. 2024.</p>

						<p>COMMITTEE ON PUBLICATION ETHICS. Guidelines on Good Publication Practice. <strong>The COPE Report</strong>, 1999. Disponível em: <a href='https://publicationethics.org/files/u7141/1999pdf13.pdf' target='_blank'>https://publicationethics.org/files/u7141/1999pdf13.pdf</a>. Acesso em: 12 nov. 2024.</p>

						<p>DECLARAÇÃO DE SINGAPURA SOBRE INTEGRIDADE EM PESQUISA. <strong>Dados</strong>, v. 53, n. 3, 2010. Disponível em: <a href='https://www.scielo.br/j/dados/a/XNLzDn8zTKmxCxVWVSrcmFh/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/dados/a/XNLzDn8zTKmxCxVWVSrcmFh/?format=pdf&lang=pt</a>. Acesso em: 20 out. 2024.</p>

						<p>DORA. <strong>Declaração de São Francisco sobre Avaliação de Pesquisa</strong>. 2020 Disponível em: <a href='https://sfdora.org/wp-content/uploads/2020/12/DORA_Brazilian-Portuguese.pdf' target='_blank'>https://sfdora.org/wp-content/uploads/2020/12/DORA_Brazilian-Portuguese.pdf</a>. Acesso em: 20 maio 2024. Acesso em:  21 out. 2024.</p>

						<p>EQUIPE GALOÁ. <strong>O que é fator de impacto das revistas científicas?</strong> Galoá – Ciência com propósito, 28 jul. 2017. Disponível em: <a href='https://galoa.com.br/blog/o-que-e-fator-de-impacto-das-revistas-cientificas/' target='_blank'>https://galoa.com.br/blog/o-que-e-fator-de-impacto-das-revistas-cientificas/</a>. Acesso em: 12 nov. 2024.</p>

						<p>GAO, Catherine A. <em>et al</em>. <strong>Comparing scientific abstracts generated by ChatGPT to real abstracts with detectors and blinded human reviewers</strong>. Digital Medicine, v. 6, n. 75, 2023. Disponível em: <a href='https://www.nature.com/articles/s41746-023-00819-6' target='_blank'>https://www.nature.com/articles/s41746-023-00819-6</a>. Acesso em: 25 out. 2024.</p>

						<p>GOTTLIEB, Michael. <strong>ChatGPT and conversational artificial intelligence: Friend, foe, or future of research?</strong> The American Journal of Emergency Medicine, v. 70, p. 81-83, 2023. Disponível em: <a href='https://www.sciencedirect.com/science/article/abs/pii/S0735675723002620' target='_blank'>https://www.sciencedirect.com/science/article/abs/pii/S0735675723002620</a>. Acesso em: 25 out. 2024.</p>

						<p>INTERNATIONAL COMMITTEE OF MEDICAL JOURNAL EDITORS (ICMJE).<strong> Recommendations for the conduct, reporting, editing, and publication of scholarly work in medical journals</strong>. International Committee of Medical Journal, jan. 2024. Disponível em: <a href='https://www.icmje.org/icmje-recommendations.pdf' target='_blank'>https://www.icmje.org/icmje-recommendations.pdf</a>. Acesso em: 12 nov. 2024.</p>

						<p>MINAYO, M. C. S.; GUERRIERO, I. C. Z. <strong>Reflexividade como éthos da pesquisa qualitativa</strong>. Ciência Saúde Coletiva. 19, 4, Abr. 2014. Disponível em: <a href='http://www.scielo.br/j/csc/a/DgfNdVrZzZbN7rKTSQ8v4qR/?lang=pt' target='_blank'>http://www.scielo.br/j/csc/a/DgfNdVrZzZbN7rKTSQ8v4qR/?lang=pt</a>. Acesso em:7 Maio 2024.</p>

						<p>SCIELO. <strong>Guia para Marcação e Publicação de Contribuição de Autores: Taxonomia CRediT</strong>. SciELO, 2022. Disponível em: <a href='https://wp.scielo.org/wp-content/uploads/credit.pdf' target='_blank'>https://wp.scielo.org/wp-content/uploads/credit.pdf</a>. Acesso em: 20 out. 2024.</p>

						<p>SCIELO. <strong>Recomendações para elaboração, redação, edição e publicação de trabalhos acadêmicos em periódicos médicos</strong>. Epidemiol. Serv. Saúde, v. 24, n. 3, set. 2015. Disponível em: <a href='https://www.scielo.br/j/ress/a/yqJfgnqpGrxrs6LhcvmTmpQ/' target='_blank'>https://www.scielo.br/j/ress/a/yqJfgnqpGrxrs6LhcvmTmpQ/</a>. Acesso em: 25 out. 2024.</p>

						<p>SCIELO Preprints. Disponível em: <a href='https://preprints.scielo.org/index.php/scielo' target='_blank'>https://preprints.scielo.org/index.php/scielo</a>. Acesso em: 20 out. 2024.</p>

						<p>SPINAK, Ernesto. <strong>Acelerando o Plano S: acordos de acesso aberto com publishers pequenos</strong>. Scielo em Perspectiva, 23 jun. 2021. Disponível em: <a href='https://blog.scielo.org/blog/2021/06/23/acelerando-o-plano-s-acordos-de-acesso-aberto-com-publishers-pequenos/' target='_blank'>https://blog.scielo.org/blog/2021/06/23/acelerando-o-plano-s-acordos-de-acesso-aberto-com-publishers-pequenos/</a>. Acesso em:  25 out. 2024.</p>

						<p>VAN DIS; Eva A. M. <em>et al</em>. <strong>ChatGPT: five priorities for research</strong>. Nature, v. 614, n. 7947, p. 224-226, 03 Seb. 2023. Disponível em: <a href='https://www.nature.com/articles/d41586-023-00288-7' target='_blank'>https://www.nature.com/articles/d41586-023-00288-7</a>. Acesso em: 21 out. 2024.</p>

						<p>VASCONCELLOS, Vinicius Gomes de. Editorial – <strong>Inteligência artificial e coautoria de trabalhos científicos: discussões sobre utilização de ChatGPT em pesquisa e redação científicas</strong>. Rev. Bras. Direito Processual Penal, Porto Alegre, v. 9, n. 3, p. 1047-1057, set-dez. 2023. Disponível em: <a href='https://www.scielo.br/j/rbdpp/a/N6v3JDGgcZsxkFsHZVtgx4P/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/rbdpp/a/N6v3JDGgcZsxkFsHZVtgx4P/?format=pdf&lang=pt</a>. Acesso em: 25 out. 2024.</p>
					</div>
					
				</div>
			</div>
		`,
	},
	bibliografiaMod5: {
		ariaLabel: 'bibliografiaMod5',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia Módulo 5',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<p>HOMEDES, N. ; UGALDE, A. (Org.) Ética y ensayos clínicos em America Latina. 1ª ed. Buenos Aires: Lugar Editorial. 2012. 420p. <span class="text-muted">ISBN: 978-950-892-419-3.</span></p>
						<p>OLIVEIRA, G. G. e colaboradores. Ensaios Clínicos: Princípios e Prática. 1ª ed. Brasília. Editora ANVISA. 2006. 328p.</p>
						<p>BARBOZA, M.F.S. Manual básico para realização de ensaios clínicos conduzidos por um “Investigador-Patrocinador”: abordagem dos procedimentos por gestão de processos. Dissertação (mestrado) – Farmanguinhos/FIOCRUZ, 2015. 173p. Disponível em: <a href="https://www.arca.fiocruz.br/bitstream/handle/icict/13163/6.pdf?sequence=1&isAllowed=y" target="_blank" rel="noopener noreferrer">https://www.arca.fiocruz.br/bitstream/handle/icict/13163/6.pdf?sequence=1&isAllowed=y</a>. Acesso em: 23 set. 2023.</p>
						<p>FREITAS, C. B. D. <em>et al.</em> Brasil: sistema de protección de los voluntários que participan en investigación. <em>In</em>: HOMEDES, N.;  UGALDE, A. (Org.). Ética y ensayos clínicos em América Latina. Buenos Aires: Lugar Editorial; 2012. p. 215-237.</p>
						<p>FRANCISCONI, C.F. <em>et al.</em> Comitês de Ética em Pesquisa: levantamento de 26 hospitais brasileiros. <strong>Revista Bioética</strong> v. 3, p. 61-67, 1995. Disponivel em: <a href="https://revistabioetica.cfm.org.br/revista_bioetica/article/view/431/499" target="_blank" rel="noopener noreferrer">https://revistabioetica.cfm.org.br/revista_bioetica/article/view/431/499</a>. Acesso em: 23 set. 2023.</p>
						<p>CLOTET, J. O consentimento informado nos Comitês de Ética em pesquisa e na prática médica: conceituação, origens e atualidade. <strong>Revista Bioética</strong>. v.3, n. 1, p. 51-9, 1995. Disponível em: <a href="https://revistabioetica.cfm.org.br/index.php/revista_bioetica/article/view/430" target="_blank" rel="noopener noreferrer">https://revistabioetica.cfm.org.br/index.php/revista_bioetica/article/view/430</a>. Acesso em: 23 set. 2023.</p>
					</div>
					
					<div class="mb-5">
						<span class="h5 mb-3 d-block">Documentos Internacionais</span>
						
						<p>ASSEMBLEIA MÉDICA MUNDIAL (FINLÂNDIA). Declaração de Helsinque, 1964. 5 p. Disponível em: <a href="https://www.fcm.unicamp.br/fcm/sites/default/files/declaracao_de_helsinque.pdf" target="_blank" rel="noopener noreferrer">https://www.fcm.unicamp.br/fcm/sites/default/files/declaracao_de_helsinque.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>TRIBUNAL MILITAR INTERNACIONAL (NURENBERG, ALEMANHA). Código de Nuremberg, 1947. Disponível em: <a href="https://www.ghc.com.br/files/CODIGO%20DE%20NEURENBERG.pdf" target="_blank" rel="noopener noreferrer">https://www.ghc.com.br/files/CODIGO%20DE%20NEURENBERG.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>BRASIL. Ministério da Saúde. Diretrizes Operacionais para Comités de Ética que Avaliam Protocolos de Pesquisa. Organização Mundial da Saúde, 2008. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_operacionais_biomedicas.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_operacionais_biomedicas.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>CONSELHO DAS ORGANIZAÇÕES INTERNACIONAIS DE CIÊNCIAS MÉDICAS ÉTICA. Diretrizes Internacionais de Ética para Pesquisa Médica envolvendo Seres Humanos. CIOMS. Disponível em: <a href="https://cioms.ch/wp-content/uploads/2018/11/CIOMS-final-Diretrizes-Eticas-Internacionais-Out18.pdf" target="_blank" rel="noopener noreferrer">https://cioms.ch/wp-content/uploads/2018/11/CIOMS-final-Diretrizes-Eticas-Internacionais-Out18.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>Código de Ética da Ciência e Tecnologia, Decreto n°71/2007, de 24 Dezembro de 2007-Moçambique. Disponível em: <a href="https://iset-oneworld.ac.mz/images/phocadownload/Biblioteca/ES/5.Decreto_71-2207_Codigo_Etica_CT.pdf" target="_blank" rel="noopener noreferrer">https://iset-oneworld.ac.mz/images/phocadownload/Biblioteca/ES/5.Decreto_71-2207_Codigo_Etica_CT.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>GOOD Clinical Practices (Harmonized Tripartite Guideline for Good Clinical Practice)  ICHE6(R2), 2016. Disponível em: <a href="https://www.tga.gov.au/resources/publication/publications/ich-guideline-good-clinical-practice" target="_blank" rel="noopener noreferrer">https://www.tga.gov.au/resources/publication/publications/ich-guideline-good-clinical-practice</a>. Acesso em: 23 set. 2023.</p>
					</div>
					
					<div class="mb-5">
					<span class="h5 mb-3 d-block">Conselho Nacional de Saúde</span>

						<p>CONSELHO NACIONAL DE SAÚDE. Resolução CNS 466/2012. Diretrizes e normas regulamentadoras de pesquisas envolvendo seres humanos. Disponível em: <a href="https://conselho.saude.gov.br/resolucoes/2012/Reso466.pdf" target="_blank" rel="noopener noreferrer">https://conselho.saude.gov.br/resolucoes/2012/Reso466.pdf</a>. Acesso em: 23 set. 2023.</p>
					</div>
					
					<div class="mb-5">
					<span class="h5 mb-3 d-block">ANVISA</span>

						<p>AGÊNCIA DE VIGILÂNCIA SANITÁRIA. RDC Nº 9, DE 20 DE FEVEREIRO DE 2015. Dispõe sobre o Regulamento para a realização de ensaios clínicos com medicamentos no Brasil. Disponível em: <a href="https://antigo.anvisa.gov.br/documents/10181/3503972/RDC_09_2015_COMP.pdf/e26e9a44-9cf4-4b30-95bc-feb39e1bacc6" target="_blank" rel="noopener noreferrer">https://antigo.anvisa.gov.br/documents/10181/3503972/RDC_09_2015_COMP.pdf/e26e9a44-9cf4-4b30-95bc-feb39e1bacc6</a>. Acesso em: 23 set. 2023.</p>
					</div>
					
					<div class="mb-5">
					<span class="h5 mb-3 d-block">Regulamentações Correlatas</span>

						<p>BRASIL. Lei nº 9782, de 26 de janeiro de 1999. Define o Sistema Nacional de Vigilância Sanitária, cria a Agência Nacional de Vigilância Sanitária, e dá outras providências. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/leis/l9782.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/leis/l9782.htm</a>. Acesso em: 23 set. 2023.</p>
						<p>BRASIL. Lei nº 11.105, de 24 de março de 2005 (Lei de Biossegurança). Estabelece normas de segurança e mecanismos de fiscalização de atividades que envolvam organismos geneticamente modificados – OGM, além de permitir para fins de pesquisa e terapia, a utilização de células-tronco embrionárias obtidas de embriões humanos produzidos por fertilização in vitro e não utilizados no respectivo procedimento, sob condições específicas. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11105.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11105.htm</a>. Acesso em: 23 set. 2023.</p>
					</div>
				</div>
			</div>
		`,
	},
	autorMod1: {
		ariaLabel: 'autorMod1',
		modalSize: 'modal-xl',
		modalTitle: 'Sobre o autor',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<p>HOMEDES, N. ; UGALDE, A. (Org.) Ética y ensayos clínicos em America Latina. 1ª ed. Buenos Aires: Lugar Editorial. 2012. 420p. <span class="text-muted">ISBN: 978-950-892-419-3.</span></p>
						<p>OLIVEIRA, G. G. e colaboradores. Ensaios Clínicos: Princípios e Prática. 1ª ed. Brasília. Editora ANVISA. 2006. 328p.</p>
						<p>BARBOZA, M.F.S. Manual básico para realização de ensaios clínicos conduzidos por um “Investigador-Patrocinador”: abordagem dos procedimentos por gestão de processos. Dissertação (mestrado) – Farmanguinhos/FIOCRUZ, 2015. 173p. Disponível em: <a href="https://www.arca.fiocruz.br/bitstream/handle/icict/13163/6.pdf?sequence=1&isAllowed=y" target="_blank" rel="noopener noreferrer">https://www.arca.fiocruz.br/bitstream/handle/icict/13163/6.pdf?sequence=1&isAllowed=y</a>. Acesso em: 23 set. 2023.</p>
						<p>FREITAS, C. B. D. <em>et al.</em> Brasil: sistema de protección de los voluntários que participan en investigación. <em>In</em>: HOMEDES, N.;  UGALDE, A. (Org.). Ética y ensayos clínicos em América Latina. Buenos Aires: Lugar Editorial; 2012. p. 215-237.</p>
						<p>FRANCISCONI, C.F. <em>et al.</em> Comitês de Ética em Pesquisa: levantamento de 26 hospitais brasileiros. <strong>Revista Bioética</strong> v. 3, p. 61-67, 1995. Disponivel em: <a href="https://revistabioetica.cfm.org.br/revista_bioetica/article/view/431/499" target="_blank" rel="noopener noreferrer">https://revistabioetica.cfm.org.br/revista_bioetica/article/view/431/499</a>. Acesso em: 23 set. 2023.</p>
						<p>CLOTET, J. O consentimento informado nos Comitês de Ética em pesquisa e na prática médica: conceituação, origens e atualidade. <strong>Revista Bioética</strong>. v.3, n. 1, p. 51-9, 1995. Disponível em: <a href="https://revistabioetica.cfm.org.br/index.php/revista_bioetica/article/view/430" target="_blank" rel="noopener noreferrer">https://revistabioetica.cfm.org.br/index.php/revista_bioetica/article/view/430</a>. Acesso em: 23 set. 2023.</p>
					</div>
					
					<div class="mb-5">
						<span class="h5 mb-3 d-block">Documentos Internacionais</span>
						
						<p>ASSEMBLEIA MÉDICA MUNDIAL (FINLÂNDIA). Declaração de Helsinque, 1964. 5 p. Disponível em: <a href="https://www.fcm.unicamp.br/fcm/sites/default/files/declaracao_de_helsinque.pdf" target="_blank" rel="noopener noreferrer">https://www.fcm.unicamp.br/fcm/sites/default/files/declaracao_de_helsinque.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>TRIBUNAL MILITAR INTERNACIONAL (NURENBERG, ALEMANHA). Código de Nuremberg, 1947. Disponível em: <a href="https://www.ghc.com.br/files/CODIGO%20DE%20NEURENBERG.pdf" target="_blank" rel="noopener noreferrer">https://www.ghc.com.br/files/CODIGO%20DE%20NEURENBERG.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>BRASIL. Ministério da Saúde. Diretrizes Operacionais para Comités de Ética que Avaliam Protocolos de Pesquisa. Organização Mundial da Saúde, 2008. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_operacionais_biomedicas.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_operacionais_biomedicas.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>CONSELHO DAS ORGANIZAÇÕES INTERNACIONAIS DE CIÊNCIAS MÉDICAS ÉTICA. Diretrizes Internacionais de Ética para Pesquisa Médica envolvendo Seres Humanos. CIOMS. Disponível em: <a href="https://cioms.ch/wp-content/uploads/2018/11/CIOMS-final-Diretrizes-Eticas-Internacionais-Out18.pdf" target="_blank" rel="noopener noreferrer">https://cioms.ch/wp-content/uploads/2018/11/CIOMS-final-Diretrizes-Eticas-Internacionais-Out18.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>Código de Ética da Ciência e Tecnologia, Decreto n°71/2007, de 24 Dezembro de 2007-Moçambique. Disponível em: <a href="https://iset-oneworld.ac.mz/images/phocadownload/Biblioteca/ES/5.Decreto_71-2207_Codigo_Etica_CT.pdf" target="_blank" rel="noopener noreferrer">https://iset-oneworld.ac.mz/images/phocadownload/Biblioteca/ES/5.Decreto_71-2207_Codigo_Etica_CT.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>GOOD Clinical Practices (Harmonized Tripartite Guideline for Good Clinical Practice)  ICHE6(R2), 2016. Disponível em: <a href="https://www.tga.gov.au/resources/publication/publications/ich-guideline-good-clinical-practice" target="_blank" rel="noopener noreferrer">https://www.tga.gov.au/resources/publication/publications/ich-guideline-good-clinical-practice</a>. Acesso em: 23 set. 2023.</p>
					</div>
					
					<div class="mb-5">
					<span class="h5 mb-3 d-block">Conselho Nacional de Saúde</span>

						<p>CONSELHO NACIONAL DE SAÚDE. Resolução CNS 466/2012. Diretrizes e normas regulamentadoras de pesquisas envolvendo seres humanos. Disponível em: <a href="https://conselho.saude.gov.br/resolucoes/2012/Reso466.pdf" target="_blank" rel="noopener noreferrer">https://conselho.saude.gov.br/resolucoes/2012/Reso466.pdf</a>. Acesso em: 23 set. 2023.</p>
					</div>
					
					<div class="mb-5">
					<span class="h5 mb-3 d-block">ANVISA</span>

						<p>AGÊNCIA DE VIGILÂNCIA SANITÁRIA. RDC Nº 9, DE 20 DE FEVEREIRO DE 2015. Dispõe sobre o Regulamento para a realização de ensaios clínicos com medicamentos no Brasil. Disponível em: <a href="https://antigo.anvisa.gov.br/documents/10181/3503972/RDC_09_2015_COMP.pdf/e26e9a44-9cf4-4b30-95bc-feb39e1bacc6" target="_blank" rel="noopener noreferrer">https://antigo.anvisa.gov.br/documents/10181/3503972/RDC_09_2015_COMP.pdf/e26e9a44-9cf4-4b30-95bc-feb39e1bacc6</a>. Acesso em: 23 set. 2023.</p>
					</div>
					
					<div class="mb-5">
					<span class="h5 mb-3 d-block">Regulamentações Correlatas</span>

						<p>BRASIL. Lei nº 9782, de 26 de janeiro de 1999. Define o Sistema Nacional de Vigilância Sanitária, cria a Agência Nacional de Vigilância Sanitária, e dá outras providências. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/leis/l9782.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/leis/l9782.htm</a>. Acesso em: 23 set. 2023.</p>
						<p>BRASIL. Lei nº 11.105, de 24 de março de 2005 (Lei de Biossegurança). Estabelece normas de segurança e mecanismos de fiscalização de atividades que envolvam organismos geneticamente modificados – OGM, além de permitir para fins de pesquisa e terapia, a utilização de células-tronco embrionárias obtidas de embriões humanos produzidos por fertilização in vitro e não utilizados no respectivo procedimento, sob condições específicas. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11105.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11105.htm</a>. Acesso em: 23 set. 2023.</p>
					</div>
				</div>
			</div>
		`,
	},
	glossario: {
		ariaLabel: 'glossario',
		modalSize: 'modal-lg',
		modalTitle: 'Glossário',
		modalBody: `
			<div class="aba">
				<ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" id="pills-atores-tab" data-bs-toggle="pill" data-bs-target="#pills-atores" type="button" role="tab" aria-controls="pills-atores" aria-selected="true">Atores</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-seguranca-tab" data-bs-toggle="pill" data-bs-target="#pills-seguranca" type="button" role="tab" aria-controls="pills-seguranca" aria-selected="false">Segurança</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-processos-tab" data-bs-toggle="pill" data-bs-target="#pills-processos" type="button" role="tab" aria-controls="pills-processos" aria-selected="false">Processos</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-documentos-tab" data-bs-toggle="pill" data-bs-target="#pills-documentos" type="button" role="tab" aria-controls="pills-documentos" aria-selected="false">Documentos</button>
					</li>
				</ul>
				<div class="tab-content p-0" id="pills-tabContent">
					<!-- Atores -->
					<div class="tab-pane fade show active" id="pills-atores" role="tabpanel" aria-labelledby="pills-atores-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-a" aria-expanded="true" aria-controls="collapse1-a">A</button>
								</h2>
								<div id="collapse1-a" class="accordion-collapse collapse" aria-labelledby="heading1-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>ANVISA</strong></p>
										<p>Agência Nacional de Vigilância Sanitária, autarquia que exerce atividades de regulação, normatização, controle e fiscalização na área de vigilância sanitária.</p>
										<p><strong>Autoridade Nacional Reguladora do Medicamento (ANARME) ou Entidade Reguladora de Moçambique</strong></p>
										<p>Instituição pública, dotada de personalidade jurídica, autonomia administrativa, financeira e patrimonial, que desempenha funções de regulamentação, supervisão, fiscalização e sancionamento, nos termos definidos pela Lei.</p>
										<p><strong>Autoridades Regulatórias</strong></p>
										<p>Instituições que têm poder regulatório, ou seja, autoridades que analisam os dados submetidos e conduzem inspeções. Podem também serem denominadas autoridades competentes.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-c" aria-expanded="false" aria-controls="collapse1-c">C</button>
								</h2>
								<div id="collapse1-c" class="accordion-collapse collapse" aria-labelledby="heading1-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Centro de Pesquisa</strong></p>
										<p>Local onde, usualmente, as atividades ligadas ao estudo são conduzidas. Ensaios Clínicos podem ser conduzidos em um único centro ou em vários centros simultaneamente (Estudos Multicêntricos).</p>
										<p><strong>Comitê de Coordenação</strong></p>
										<p>Comitê organizado pelo patrocinador para coordenar a condução de um estudo multicêntrico.</p>
										<p><strong>Comitê de Ética em Pesquisa (CEP)</strong></p>
										<p>Organização independente, multidisciplinar, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo, por meio da aprovação e revisão contínua do protocolo do estudo e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa.</p>
										<p><strong>Comitê de Ética Independente (IEC)</strong></p>
										<p>Uma organização independente (um conselho de revisão ou um comitê institucional, regional, nacional ou supranacional) constituído por profissionais da área médica/científica e membros pertencentes a outras áreas, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo e assegurar publicamente a sua proteção, através da revisão e aprovação/parecer favorável sobre o protocolo do estudo, adequação dos investigadores, recursos e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa, entre outras atividades. A situação legal, composição, função, operação e exigências regulatórias pertinentes ao Comitê de Ética Independente podem ser diferentes em cada país, mas devem permitir que ele atue em consonância com o Guia das BPC (ICH).</p>
										<p><strong>Comitê Independente de Monitoramento de Dados (IDMC)</strong></p>
										<p>Também conhecido como Conselho de Monitoramento de Dados e Segurança, Comitê de Monitoramento ou Comitê de Monitoramento de Dados. É um comitê independente de monitoramento de dados que, pode ser implementado pelo investigador, para avaliar periodicamente o desenvolvimento de um estudo clínico, os dados de segurança e os limites críticos de eficácia, além de recomendar ao patrocinador a continuidade, a modificação, ou o encerramento do estudo.</p>
										<p><strong>Comitê Institucional de Bioética Para Saúde (CIBS)</strong></p>
										<p>Entidade criada pelo Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique, com competências delegadas para avaliação de aspectos éticos de propostas de investigação em saúde a nível de uma ou mais instituições, e que apenas efetua avaliação de protocolos de investigação provenientes ou realizados em colaboração com as respectivas instituições.</p>
										<p><strong>Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique</strong></p>
										<p>Órgão independente multidisciplinar, que faz avaliação dos protocolos de investigação na área da saúde para aferir a aplicação dos princípios éticos na realização da pesquisa tendo em conta a proteção dos participantes. Assegura a proteção dos direitos, segurança e bem-estar dos participantes nos estudos. Faz também a tutela e monitoria da atividade dos Comités Institucionais de Bioética para a Saúde (CIBS). O CNBS e os CIBS avaliam os aspectos metodológicos de protocolos de investigação quando os Comitês Científicos das instituições proponentes de protocolos não estiverem em funcionamento, e sempre que houver aspectos metodológicos que impactem a Bioética.</p>
										<p><strong>CONEP</strong></p>
										<p>Comissão Nacional de Ética em Pesquisa, é uma instância colegiada, de natureza consultiva, deliberativa, normativa, educativa e independente, vinculada ao Conselho Nacional de Saúde/MS.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-i">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-i" aria-expanded="false" aria-controls="collapse1-i">I</button>
								</h2>
								<div id="collapse1-i" class="accordion-collapse collapse" aria-labelledby="heading1-i" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Instituição</strong></p>
										<p>Qualquer entidade, agência ou instalação médica ou odontológica onde sejam conduzidos estudos clínicos.</p>
										<p><strong>Investigador de Coordenação</strong></p>
										<p>Um investigador responsável pela coordenação de investigadores de diferentes centros participantes de um estudo multicêntrico.</p>
										<p><strong>Investigador/Investigador Principal/Pesquisador</strong></p>
										<p>Pessoa responsável por conduzir o estudo clínico em um centro de pesquisa. Pesquisador responsável ou Investigador Principal é o responsável legal pelo estudo, líder da equipe do estudo. Um médico qualificado (ou dentista, conforme o caso), que for um investigador ou um subinvestigador do ensaio, deve ser responsável por todas as decisões médicas (ou odontológicas) relacionadas ao ensaio.</p>
										<p><strong>Investigador/ Instituição</strong></p>
										<p>Expressão que significa “o investigador e/ou instituição”, quando e onde solicitada pelas exigências regulatórias aplicáveis.</p>
										<p><strong>Investigador-Patrocinador</strong></p>
										<p>Indivíduo que implementa e conduz, sozinho ou em grupo, um estudo clínico e sob cuja imediata direção o produto sob investigação é administrado, fornecido ou utilizado por um paciente. O termo não inclui qualquer pessoa que não um indivíduo (ex.: não inclui uma corporação ou uma agência). As responsabilidades de um investigador-patrocinador incluem tanto as do patrocinador como as do investigador.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-o">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-o" aria-expanded="false" aria-controls="collapse1-o">O</button>
								</h2>
								<div id="collapse1-o" class="accordion-collapse collapse" aria-labelledby="heading1-o" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Organização de Pesquisa Contratada (CRO)</strong></p>
										<p>Uma pessoa ou organização (comercial, acadêmica ou outra) contratada pelo patrocinador para realizar um ou mais de seus deveres e funções relativos a estudos clínicos.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-p" aria-expanded="false" aria-controls="collapse1-p">P</button>
								</h2>
								<div id="collapse1-p" class="accordion-collapse collapse" aria-labelledby="heading1-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Participante de Pesquisa</strong></p>
										<p>Pela regulamentação brasileira, indivíduo que, de forma esclarecida e voluntária, ou sob o esclarecimento e autorização de seu(s) responsável(eis) legal(ais), aceita ser pesquisado. Podem pertencer ao grupo dos que recebem o produto sob investigação ou ao grupo de controle. Além disso, podem ser portadores de alguma comorbidade/patologia ou indivíduos saudáveis.</p>
										<p><strong>Populações Vulneráveis</strong></p>
										<p>Indivíduos cuja vontade de participar do estudo possa ser indevidamente influenciada pela expectativa, justificada ou não, de benefícios associados à participação, ou de uma reação negativa, em caso de recusa, por parte de membros seniores de alguma hierarquia da qual façam parte ou à qual estejam submetidos. Exemplos são indivíduos pertencentes a grupos com uma estrutura hierárquica constituída, como estudantes de medicina, farmácia, odontologia e enfermagem, funcionários de hospitais e laboratórios, da indústria farmacêutica, membros das forças armadas e detentos. Outros participantes de pesquisa vulneráveis são aqueles portadores de doenças incuráveis ou que estejam em casas de repouso, pessoas desempregadas ou miseráveis, pacientes em situações de emergência, grupos étnicos minoritários, pessoas sem moradia, nômades, refugiados, menores e aqueles incapazes de atestar o próprio consentimento.</p>
										<p><strong>Patrocinador</strong></p>
										<p>Pessoa física ou jurídica, pública ou privada que apoia a pesquisa de variadas formas, seja com financiamento, infraestrutura, recursos humanos ou apoio institucional.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-r" aria-expanded="false" aria-controls="collapse1-r">R</button>
								</h2>
								<div id="collapse1-r" class="accordion-collapse collapse" aria-labelledby="heading1-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Representante legal</strong></p>
										<p>Pessoa física ou jurídica autorizada pela legislação aplicável para consentir, em nome do participante de pesquisa, sua participação em um estudo clínico.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-s">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-s" aria-expanded="false" aria-controls="collapse1-s">S</button>
								</h2>
								<div id="collapse1-s" class="accordion-collapse collapse" aria-labelledby="heading1-s" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Sub Investigador</strong></p>
										<p>Qualquer membro específico da equipe do estudo clínico, designado e supervisionado pelo investigador no centro de pesquisa para conduzir procedimentos essenciais e/ou tomar decisões importantes relacionadas ao estudo.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-t">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-t" aria-expanded="false" aria-controls="collapse1-t">T</button>
								</h2>
								<div id="collapse1-t" class="accordion-collapse collapse" aria-labelledby="heading1-t" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Testemunha Imparcial</strong></p>
										<p>Pessoa, não relacionada ao estudo, não sendo injustamente influenciada pelas pessoas nele envolvidas, que participe do processo de consentimento, inclusive registrando participação assinando o Termo de Consentimento Livre e Esclarecido (TCLE), caso o participante de pesquisa, ou seu responsável legal, não saiba ler e/ou escrever, garantindo assim que as informações redigidas destinadas aos participantes sejam as mesmas informadas verbalmente.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Segurança -->
					<div class="tab-pane fade" id="pills-seguranca" role="tabpanel" aria-labelledby="pills-seguranca-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-c" aria-expanded="true" aria-controls="collapse2-c">C</button>
								</h2>
								<div id="collapse2-c" class="accordion-collapse collapse" aria-labelledby="heading2-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Comparador (Produto)</strong></p>
										<p>Um produto sob investigação ou comercializado ou placebo, usado como referência em um estudo clínico.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-d">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-d" aria-expanded="false" aria-controls="collapse2-d">D</button>
								</h2>
								<div id="collapse2-d" class="accordion-collapse collapse" aria-labelledby="heading2-d" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Desvio de Protocolo</strong></p>
										<p>Qualquer não cumprimento dos procedimentos ou requisitos definidos na versão aprovada do protocolo, sem implicações maiores na integridade do ensaio, na qualidade dos dados ou nos direitos e segurança dos participantes.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-e" aria-expanded="false" aria-controls="collapse2-e">E</button>
								</h2>
								<div id="collapse2-e" class="accordion-collapse collapse" aria-labelledby="heading2-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Evento Adverso (EA)</strong></p>
										<p>Qualquer ocorrência médica inconveniente ou sinal desfavorável ou não planejado (incluindo achados laboratoriais anormais), sintoma, ou doença temporariamente associada com o uso de um produto farmacêutico sob investigação, relacionadas ou não ao produto farmacêutico sob investigação, e que não, necessariamente, tenha uma relação causal com o tratamento.</p>
										<p><strong>Evento Adverso Grave (EAG) / Evento Adverso Sério (EAS)</strong></p>
										<p>Qualquer ocorrência médica adversa que, em qualquer dose: - resulte em morte, - represente risco à vida, - implique em hospitalização ou prolongamento de uma hospitalização existente, - resulte em persistente inabilidade/incapacidade significativa, ou - cause anomalia congênita.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-p" aria-expanded="false" aria-controls="collapse2-p">P</button>
								</h2>
								<div id="collapse2-p" class="accordion-collapse collapse" aria-labelledby="heading2-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Placebo</strong></p>
										<p>Formulação sem efeito farmacológico, administrada ao participante do ensaio clínico com a finalidade de mascaramento ou de ser comparador.</p>
										<p><strong>Produto Investigacional (ou produto experimental)</strong></p>
										<p>Forma farmacêutica de um ingrediente ativo ou placebo que está sendo provada ou usada como referência em um estudo clínico (Ensaio Clínico). Incluindo produto com autorização prévia de comercialização, mas utilizado ou formulado ou empacotado de maneira diferente daquela aprovada.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-r" aria-expanded="false" aria-controls="collapse2-r">R</button>
								</h2>
								<div id="collapse2-r" class="accordion-collapse collapse" aria-labelledby="heading2-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Reação Adversa ao medicamento (RAM)</strong></p>
										<p>Qualquer resposta prejudicial ou indesejável, não intencional, a um medicamento, que ocorre nas doses usualmente empregadas para profilaxia, diagnóstico ou terapia de doenças. No conceito de RAM pode-se observar a existência de uma relação causal entre o uso do medicamento e a ocorrência do evento.</p>
										<p><strong>Reação Adversa Inesperada ao medicamento</strong></p>
										<p>Uma reação adversa, cuja natureza ou severidade não seja condizente com as informações aplicáveis ao produto (ex.: Brochura do Investigador para produtos sob investigação não aprovados ou bula/resumo das características do produto para os aprovados).</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-v">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-v" aria-expanded="false" aria-controls="collapse2-v">V</button>
								</h2>
								<div id="collapse2-v" class="accordion-collapse collapse" aria-labelledby="heading2-v" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Violação de protocolo de ensaio clínico</strong></p>
										<p>Desvio de protocolo de ensaio clínico que possa afetar a qualidade dos dados, que comprometa a integridade do estudo ou que possa afetar a segurança ou os direitos dos participantes do ensaio clínico.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Processos -->
					<div class="tab-pane fade" id="pills-processos" role="tabpanel" aria-labelledby="pills-processos-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-a" aria-expanded="true" aria-controls="collapse3-a">A</button>
								</h2>
								<div id="collapse3-a" class="accordion-collapse collapse" aria-labelledby="heading3-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Adesão (em relação aos estudos)</strong></p>
										<p>Seguir todas as exigências relativas ao estudo, às Boas Práticas Clínicas e às exigências regulatórias aplicáveis.</p>
										<p><strong>Acesso Direto</strong></p>
										<p>Permissão para examinar, analisar, verificar e reproduzir quaisquer registros e relatórios que sejam importantes para avaliar o estudo clínico. Qualquer parte (ex.: autoridades regulatórias nacionais e estrangeiras, auditores e monitores do patrocinador) com acesso direto deverá ter o devido cuidado, com as restrições estabelecidas pelas exigências regulatórias aplicáveis, para que se mantenha confidencialidade dos participantes de pesquisa e das informações de propriedade do patrocinador.</p>
										<p><strong>Assentimento livre e esclarecido</strong></p>
										<p>Anuência do participante da pesquisa – criança, adolescente ou indivíduos impedidos de forma temporária ou não de consentir, na medida de sua compreensão e respeitadas suas singularidades, após esclarecimento sobre a natureza da pesquisa, justificativa, objetivos, métodos, potenciais benefícios e riscos. A obtenção do assentimento não elimina a necessidade do consentimento do responsável.</p>
										<p><strong>Auditoria</strong></p>
										<p>Verificação independente e sistemática das atividades e documentos relativos ao estudo, a fim de determinar se o protocolo, os procedimentos operacionais padrões do patrocinador (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis estão sendo cumpridas.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-b">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-b" aria-expanded="false" aria-controls="collapse3-b">B</button>
								</h2>
								<div id="collapse3-b" class="accordion-collapse collapse" aria-labelledby="heading3-b" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Bem-estar (dos participantes de pesquisa)</strong></p>
										<p>Integridade física e mental dos indivíduos envolvidos em um estudo clínico.</p>
										<p><strong>Boas Práticas Clínicas (BPC)</strong></p>
										<p>Padrão de qualidade ética e científica para o planejamento, condução, registro e relato de estudos clínicos que envolvam a participação de seres humanos. O objetivo é assegurar a proteção dos direitos, integridade e confidencialidade dos participantes da pesquisa, assim como, a credibilidade dos dados e a precisão dos resultados.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-c" aria-expanded="false" aria-controls="collapse3-c">C</button>
								</h2>
								<div id="collapse3-c" class="accordion-collapse collapse" aria-labelledby="heading3-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Caráter Cego/Mascaramento</strong></p>
										<p>Procedimento no qual uma ou mais partes envolvidas no estudo é mantida desinformada sobre as indicações do tratamento. O caráter cego geralmente refere-se aos participantes de pesquisa. Caso o estudo seja duplo-cego, significa que não somente o participante, mas os investigadores, monitores e, em alguns casos, os analistas de dados são mantidos desinformados quanto ao tratamento.</p>
										<p><strong>Confidencialidade </strong></p>
										<p>Prevenir a divulgação para outros, que não os indivíduos autorizados, sobre a identidade de um participante de pesquisa ou de uma informação de propriedade do patrocinador.</p>
										<p><strong>Consentimento Livre e Esclarecido</strong></p>
										<p>Processo através do qual um participante confirma voluntariamente sua intenção de participar em um ensaio em particular, após ter sido informado de todos os aspectos do ensaio que forem relevantes para a decisão do participante de entrar no estudo.</p>
										<p><strong>Controle de Qualidade</strong></p>
										<p>Técnicas e atividades operacionais adotadas dentro do sistema de garantia de qualidade para assegurar que todas as exigências de qualidade relacionadas às atividades do estudo sejam atendidas.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-e" aria-expanded="false" aria-controls="collapse3-e">E</button>
								</h2>
								<div id="collapse3-e" class="accordion-collapse collapse" aria-labelledby="heading3-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Estudo Clínico</strong></p>
										<p>Qualquer investigação em seres humanos que pretenda descobrir ou verificar os efeitos clínicos, farmacêuticos e/ou outros efeitos farmacodinâmicos de um produto sob investigação; e/ou identificar quaisquer reações adversas a um produto sob investigação; e/ou estudar a absorção, distribuição, metabolismo e excreção de um produto sob investigação com o objetivo de apurar sua segurança e/ou eficácia.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-f">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-f" aria-expanded="false" aria-controls="collapse3-f">F</button>
								</h2>
								<div id="collapse3-f" class="accordion-collapse collapse" aria-labelledby="heading3-f" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Farmacocinética</strong></p>
										<p>Em geral, são todas as modificações que um sistema biológico produz em um princípio ativo. É o estudo da cinética (relação quantitativa entre a variável independente tempo e a variável dependente concentração) dos processos de absorção, distribuição, biotransformação e excreção dos medicamentos (princípios ativos e/ou seus metabolitos).</p>
										<p><strong>Farmacodinâmica</strong></p>
										<p>Modificações que um princípio ativo produz em um sistema biológico, ou seja, é o estudo dos efeitos bioquímicos e fisiológicos dos medicamentos e seus mecanismos de ação.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-g">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-g" aria-expanded="false" aria-controls="collapse3-g">G</button>
								</h2>
								<div id="collapse3-g" class="accordion-collapse collapse" aria-labelledby="heading3-g" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Garantia de Qualidade</strong></p>
										<p>Todas as ações planejadas e sistemáticas realizadas para garantir que o estudo seja desenvolvido e os dados sejam gerados, documentados, relatados e arquivados conforme as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-i">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-i" aria-expanded="false" aria-controls="collapse3-i">I</button>
								</h2>
								<div id="collapse3-i" class="accordion-collapse collapse" aria-labelledby="heading3-i" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Inspeção</strong></p>
										<p>Atividade de uma autoridade regulatória a fim de avaliar documentos, instalações, registros e quaisquer outros recursos que se considerem relacionados ao estudo clínico, os quais podem estar localizados na instituição onde está sendo conduzido o estudo, nas dependências do patrocinador e/ou nas organizações de pesquisa contratadas (CRO), ou em outros estabelecimentos tidos como apropriados pelas autoridades regulatórias.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-m">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-m" aria-expanded="false" aria-controls="collapse3-m">M</button>
								</h2>
								<div id="collapse3-m" class="accordion-collapse collapse" aria-labelledby="heading3-m" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Monitoria</strong></p>
										<p>Atividade de acompanhamento do progresso de um estudo clínico, garantindo que sua condução, registros e relatos sejam realizados de acordo com o protocolo, os Procedimentos Operacionais Padrão (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-r" aria-expanded="false" aria-controls="collapse3-r">R</button>
								</h2>
								<div id="collapse3-r" class="accordion-collapse collapse" aria-labelledby="heading3-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Randomização</strong></p>
										<p>Processo de designação aleatória dos participantes de pesquisa ao tratamento ou ao grupo-controle, de forma a reduzir parcialidades.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Documentos  -->
					<div class="tab-pane fade" id="pills-documentos" role="tabpanel" aria-labelledby="pills-documentos-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-a" aria-expanded="true" aria-controls="collapse4-a">A</button>
								</h2>
								<div id="collapse4-a" class="accordion-collapse collapse" aria-labelledby="heading4-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Aprovação (em relação às Instâncias Regulatórias)</strong></p>
										<p>É a decisão afirmativa de que o estudo clínico foi analisado e pode ser conduzido, seguindo as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis, observando as recomendações específicas de cada uma destas instâncias.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-b">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-b" aria-expanded="false" aria-controls="collapse4-b">B</button>
								</h2>
								<div id="collapse4-b" class="accordion-collapse collapse" aria-labelledby="heading4-b" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Brochura do Investigador</strong></p>
										<p>Documento que apresenta a compilação dos dados clínicos e não clínicos acerca dos produtos sob investigação, relevante para o estudo do(s) produto(s) sob investigação em seres humanos. No caso de medicamento já comercializado pode ser substituído pela Bula.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-c" aria-expanded="false" aria-controls="collapse4-c">C</button>
								</h2>
								<div id="collapse4-c" class="accordion-collapse collapse" aria-labelledby="heading4-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Certificado de Auditoria</strong></p>
										<p>Declaração de confirmação do auditor de que a auditoria foi realizada.</p>
										<p><strong>Código de Identificação do Participante</strong></p>
										<p>Código identificador exclusivo, designado pelo investigador (ou pelo patrocinador) para cada participante de pesquisa, com intuito de manter sua identidade em sigilo.</p>
										<p><strong>Contrato</strong></p>
										<p>Formato de documento que apresenta o acordo por escrito, datado e assinado entre duas ou mais partes envolvidas que estabeleça quaisquer determinações de delegação e distribuição de tarefas e obrigações e, se apropriado, sobre assuntos financeiros. O protocolo pode servir de base para o contrato.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-d">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-d" aria-expanded="false" aria-controls="collapse4-d">D</button>
								</h2>
								<div id="collapse4-d" class="accordion-collapse collapse" aria-labelledby="heading4-d" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Dados Fonte</strong></p>
										<p>Todas as informações dos registros originais, sendo cópias autenticadas de registros originais de achados clínicos, observações ou ainda outras atividades de uma pesquisa clínica necessárias para a reconstrução e avaliação do estudo. Os dados fonte estão contidos nos documentos fonte (registros originais ou cópias autenticadas).</p>
										<p><strong>Documentação</strong></p>
										<p>Todos os registros, sob qualquer forma (incluindo dados escritos, eletrônicos, magnéticos e ópticos, eletrocardiogramas, raios-X e demais exames de imagem, entre outros), que descrevem ou registram os métodos, condutas e/ou resultados de um estudo, os fatores que o afetaram e as ações realizadas.</p>
										<p><strong>Documentos Essenciais</strong></p>
										<p>Documentos que, individual ou coletivamente, permitem a avaliação da condução ética e da qualidade dos dados produzidos por um estudo clínico.</p>
										<p><strong>Documentos Fonte</strong></p>
										<p>Documentos, dados e registros originais (ex.: registros hospitalares, tabelas clínicas e administrativas, anotações laboratoriais, memorandos, diários de paciente ou checklists de avaliação, registros de prescrição farmacêutica, dados registrados por documentos automatizados, cópias ou transcrições autenticadas após verificação de sua precisão, microficha, negativos fotográficos, microfilmes ou registros magnéticos, raios-X, arquivos de pacientes e registros arquivados na farmácia, nos laboratórios e nos departamentos envolvidos no estudo clínico).</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-e" aria-expanded="false" aria-controls="collapse4-e">E</button>
								</h2>
								<div id="collapse4-e" class="accordion-collapse collapse" aria-labelledby="heading4-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Emenda ao Protocolo</strong></p>
										<p>Documento que descreve as alterações ou esclarecimentos formais feitos ao protocolo.</p>
										<p><strong>Exigências Regulatórias Aplicáveis</strong></p>
										<p>Quaisquer leis ou regulamentos sobre a condução de estudos que envolvem seres humanos, com produtos sob investigação ou não.</p>
										<p><strong>Ficha Clínica (Case Report Form - CRF)</strong></p>
										<p>Documento impresso, óptico ou eletrônico elaborado para registrar todas as informações exigidas pelo protocolo a serem relatadas ao patrocinador sobre cada participante de pesquisa.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-p" aria-expanded="false" aria-controls="collapse4-p">P</button>
								</h2>
								<div id="collapse4-p" class="accordion-collapse collapse" aria-labelledby="heading4-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Parecer</strong></p>
										<p>Documento que emite o resultado da análise em relação ao estudo submetido ao Comitê de Ética em Pesquisa (CEP).</p>
										<p><strong>Procedimentos Operacionais Padrão (POP)</strong></p>
										<p>Instruções escritas e detalhadas para a uniformidade de desempenho de uma determinada função.</p>
										<p><strong>Produto sob investigação</strong></p>
										<p>Forma de apresentação farmacêutica de um princípio ativo ou placebo sendo testado ou usado como referência em um estudo clínico, incluindo um produto com autorização comercial / de comercialização quando usado ou apresentado (formulado ou embalado) sob uma forma diferente da aprovada, ou usado para uma indicação não aprovada, ou quando usado para obter maiores informações sobre a forma aprovada.</p>
										<p><strong>Protocolo</strong></p>
										<p>Documento que descreve toda a base do estudo, contendo justificativa, objetivos, desenho, metodologia, considerações estatísticas e organização do estudo. No entanto, estas informações podem ser fornecidas, de forma mais detalhada, por outros documentos referenciados pelo protocolo. Considera-se o termo protocolo o documento em si e às emendas ao protocolo.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-r" aria-expanded="false" aria-controls="collapse4-r">R</button>
								</h2>
								<div id="collapse4-r" class="accordion-collapse collapse" aria-labelledby="heading4-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Relatório de Auditoria</strong></p>
										<p>Avaliação por escrito realizada pelo auditor do patrocinador sobre os resultados e impressões da auditoria.</p>
										<p><strong>Relatório de Estudo Clínico</strong></p>
										<p>Descrição por escrito do ensaio/estudo de qualquer agente terapêutico, profilático ou de diagnóstico conduzido em seres humanos, no qual as descrições clínicas e estatísticas, apresentações e análises estão plenamente integradas em um único relatório.</p>
										<p><strong>Relatório Interino do Estudo Clínico</strong></p>
										<p>Relatório contendo os resultados intermediários e sua avaliação baseada em análises realizadas no decorrer de um estudo.</p>
										<p><strong>Relatório de Monitoria</strong></p>
										<p>Relatório que descreve os achados e as impressões do monitor para o patrocinador, após cada visita de monitoria do estudo e/ou outros comunicados relacionados, de acordo com os POP do patrocinador.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-t">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-t" aria-expanded="false" aria-controls="collapse4-t">T</button>
								</h2>
								<div id="collapse4-t" class="accordion-collapse collapse" aria-labelledby="heading4-t" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Trilha de Auditoria</strong></p>
										<p>Documentação que permite a reconstrução do curso dos eventos e /ou achados.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`,
	},
};

// Get all buttons and links that have "modal" in the data-bs-toggle
const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');

document.addEventListener('DOMContentLoaded', function (event) {
	//do work

	modalButtons.forEach(btn => {
		// Check if the modal exist
		const modalId = btn.getAttribute('data-bs-target').slice(1);
		const createdModalId = document.getElementById(modalId);
		const modalOrigin = btn.getAttribute('data-bs-target').slice(7);
		const hasPropriety = Object.hasOwn(modalInfos, modalOrigin);

		if (!createdModalId && hasPropriety) {
			// console.log('modalOrigin: ' + modalOrigin + ' hasPropriety: ' + hasPropriety);

			// If don't exist create one
			createModal(modalId);
		}
	});
});

function createModal(id) {
	const newModal = document.createElement('div');
	const modalLabel = id.slice(6);

	newModal.classList.add('modal', 'fade');
	newModal.setAttribute('id', id);
	newModal.setAttribute('tabindex', '-1');
	newModal.setAttribute('aria-labelledby', modalLabel);
	newModal.setAttribute('aria-hidden', 'true');

	newModal.innerHTML = `
		<div class="modal-dialog ${modalInfos[modalLabel].modalSize}">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="${modalInfos[modalLabel].ariaLabel}">${modalInfos[modalLabel].modalTitle}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					${modalInfos[modalLabel].modalBody}
				</div>
				<div class="modal-footer">
					<button type="button" class="fio-button fio-button-primary" data-bs-dismiss="modal">Fechar</button>
				</div>
			</div>
		</div>
	`;

	document.body.appendChild(newModal);
}

// Carrossel - Remove previous and next button from 1st and last slides:
// document.querySelector(document).ready(function () { 
// 	checkitem();
// });

document.addEventListener('DOMContentLoaded', function () {
	checkitem();
});

var carousel = document.querySelectorAll('.carousel');

carousel.forEach(element => {
	element.addEventListener('slid.bs.carousel', checkitem(element));
});


function checkitem(element) {
	//var document.querySelectorthis = document.querySelector('.carousel');

	var carouselInner = document.querySelectorAll('.carousel-inner .carousel-item');
	var itemFirstChild = carouselInner[0];
	var itemLastChild = carouselInner[carouselInner.length - 1];
	console.log(itemLastChild);

	var buttonPrev = document.querySelector('.carousel-control-prev');
	var buttonNext = document.querySelector('.carousel-control-next');

	if (itemFirstChild.classList.contains('active')) {
		document.querySelector(body).style.backgroundColor = '#000000';

		// Hide left arrow
		buttonPrev.style.visibility = 'hidden';
		// But show right arrow
		buttonNext.style.visibility = 'visible';
	} else if (itemLastChild.classList.contains('active')) {
		// Hide right arrow
		buttonNext.style.visibility = 'hidden';
		// But show left arrow
		buttonPrev.style.visibility = 'visible';
	} else {
		buttonPrev.style.visibility = 'visible';
		buttonNext.style.visibility = 'visible';
	}
}

