// COMPONENTS
import Layout from '../../components/Layout';
// HOOKS
import { useAddClient } from '../../hooks/client';

const Register = () => {
    const { handleChange, handleSubmit, handleBlur, touched, values, errors, loading } = useAddClient();

    return (
        <Layout>
            <div className="flex justify-between items-center mb-3">
                <h1 className="px-4 sm:px-8 text-gray-800 text-2xl font-bold uppercase">Nuevo Cliente</h1>
            </div>
            <div className="flex py-4 overflow-x-auto justify-center">
                <div className="flex flex-col bg-white shadow-lg px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-3/4 md:w-3/5 lg:w-2/4">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                Nombre
                            </label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>

                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                    placeholder="Nombre"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>

                        {touched.name && errors.name && (
                            <div className="-mt-5">
                                <p className="text-red-700 font-semibold px-2">{errors.name}</p>
                            </div>
                        )}

                        <div className="flex flex-col mb-6">
                            <label htmlFor="last_name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                Apellidos
                            </label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>

                                <input
                                    id="last_name"
                                    type="text"
                                    name="last_name"
                                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                    placeholder="Apellidos"
                                    value={values.last_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>

                        {touched.last_name && errors.last_name && (
                            <div className="-mt-5">
                                <p className="text-red-700 font-semibold px-2">{errors.last_name}</p>
                            </div>
                        )}

                        <div className="flex flex-col mb-6">
                            <label htmlFor="business" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                Empresa
                            </label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>

                                <input
                                    id="business"
                                    type="text"
                                    name="business"
                                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                    placeholder="Empresa"
                                    value={values.business}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>

                        {touched.business && errors.business && (
                            <div className="-mt-5">
                                <p className="text-red-700 font-semibold px-2">{errors.business}</p>
                            </div>
                        )}

                        <div className="flex flex-col mb-6">
                            <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                Email
                            </label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>

                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                    placeholder="Apellidos"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>

                        {touched.email && errors.email && (
                            <div className="-mt-5">
                                <p className="text-red-700 font-semibold px-2">{errors.email}</p>
                            </div>
                        )}

                        <div className="flex flex-col mb-6">
                            <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                Telefono
                            </label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>

                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                    placeholder="Apellidos"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>

                        {touched.phone && errors.phone && (
                            <div className="-mt-5">
                                <p className="text-red-700 font-semibold px-2">{errors.phone}</p>
                            </div>
                        )}

                        <div className="flex w-full">
                            <button
                                type="submit"
                                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                                disabled={loading}
                            >
                                {loading && (
                                    <svg fill="none" className="w-6 h-6 animate-spin" viewBox="0 0 32 32">
                                        <path
                                            clipRule="evenodd"
                                            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                )}
                                <span className="uppercase">{loading ? 'Registrando' : 'Registrar'}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Register;
