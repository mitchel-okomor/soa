import Home from "../pages/Home/Home";
import About from "../pages/About/About";


export const openRoutesData = [
	{
		name:'home',
		path:'/',
		component: Home,
		exact: true

	},
	{
		name:'about',
		path:'/about',
		component: About,
		exact: true

	}
]

