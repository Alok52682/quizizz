import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                <h1 className='text-5xl font-bold text-error my-10'>#Question 1</h1>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5ccM2OaHBdFLxqr_7sQPxWA8f2nARYig9A&usqp=CAU" className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">What is the purpose of React Router?</h2>
                        <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>

                        <p>Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
                        <p><strong>Setting up the React Application:</strong> Create a React application using create-react-app and lets call it geeks.</p>

                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto'>
                <h1 className='text-5xl font-bold text-error my-10'>#Question 2</h1>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://www.qed42.com/sites/default/files/2020-05/Context%20API%20in%20React%20with%20Hooks.png" className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">How does Context API works?</h2>
                        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>

                        <p>React.createContext() is all we need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page</p>


                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto'>
                <h1 className='text-5xl font-bold text-error my-10'>#Question 3</h1>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://blog.alexdevero.com/wp-content/uploads/2021/05/10-05-21-reacts-useref-hook-what-it-is-and-how-to-use-it-blog.jpg" className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Describe UseRef shortly</h2>
                        <p>useRef is one of the standard hooks provided by React. It will return an object that we can use during the whole lifecycle of the component.

                            The main use case for the useRef hook is to access a DOM child directly. I will show exactly how to do that in another section. </p>

                        <p>In plain JavaScript we had to use getElementById or querySelector to select a DOM node.

                            But this is not an ideal solution in React.

                            In React we want to use the useRef hook or if we are in a React class component, we want to use createRef.

                            The reason we donot want to use getElementById or querySelector is because we may be designing wer React app to output multiple of the same ID’s, which is a no no.

                            Another reason to use useRef is because it helps with the unidirectional (single direction) data flow.

                            we can define a node reference in a parent component and toss them down to child components.

                            Hence the single direction data flow.

                            Since our talk is about some of the React hook API, I am going to use the useRef method.</p> <br />
                        Old reference method  <br />
                        const inputRef = document.querySelector('input'); <br />

                        React reference method <br />
                        Use useRef() for React functional components <br />
                        const inputRef = useRef(); <br />
                        <p>Essentially, useRef is a hook function that gets assigned to a variable, inputRef, and then attached to an attribute called ref inside the HTML element you want to reference.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;