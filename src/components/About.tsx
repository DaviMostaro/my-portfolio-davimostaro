export const About = () => {
    return (
        <div className="bg-gray-900 rounded-2xl flex flex-row mx-auto my-20 max-w-7xl p-10 max-lg:flex-col max-lg:items-center max-lg:p-6 max-md:my-10">
            <div className="w-1/2 ml-15 max-lg:w-full max-lg:ml-0 max-lg:mb-10 max-md:flex max-md:w-full max-md:items-center max-md:justify-center
            max-lg:flex max-lg:items-center max-lg:justify-center">
                <img 
                    src="/assets/1.jpg" 
                    alt="Imagem de perfil"
                    className="w-96 h-96 object-cover rounded-full max-lg:w-80 max-lg:h-80 max-md:w-64 max-md:h-64"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center max-lg:w-full">
                <h1 className="text-3xl mb-5 max-md:text-2xl">Sobre mim</h1>
                <p className="max-md:text-sm max-md:px-4">Olá! Meu nome é Davi Souza Mostaro, sou um desenvolvedor web com foco em backend e com o objetivo de me especializar em segurança e sistemas robustos. Atualmente, curso Ciência da Computação na UFJF, onde venho aprofundando meus conhecimentos e aprimorando minhas habilidades técnicas.

                Tenho maior domínio em TypeScript, NodeJS, Python, banco de dados PostgreeSQL/MySQL e estou sempre em busca de novos aprendizados para evoluir profissionalmente. </p>
            </div>
        </div>
    );
}
