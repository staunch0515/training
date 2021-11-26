import React, { memo, useCallback, useState, useRef, useLayoutEffect, useEffect, useMemo } from 'react';

type ChildProps = {
	clickChild: any,
}

const PureChild = ({ clickChild }: ChildProps) =>
{
	console.log('Child render >>');
	return <>
		<div >
			<button onClick={clickChild} >clickChild</button>
		</div>
	</>;
};

const Child = memo(PureChild);

const Parent = () =>
{
	const [count, setCount] = useState(0);

	const h1Ref = useRef<HTMLDivElement>(null);


	const clickChild = useCallback((e) =>
	{
		console.log('click Child');

	}, []);

	useEffect(() =>
	{


		console.log(' useEffect');

	});

	function changeInnerText(el: HTMLDivElement, value: string)
	{
		el.innerText = value;
	}

	useLayoutEffect(() =>
	{

		console.log(' useLayoutEffect');
		if (null !== h1Ref.current)
		{
			changeInnerText(h1Ref.current, 'Hello world!' + String(count));
		}

	}, [count])


	const clickParent = () =>
	{
		console.log('click Parent');
		setCount(preCount => preCount + 1);
	};

	return (
		<div>
			<h1 ref={h1Ref}>App{count}</h1>
			<button onClick={clickParent}>click Parent</button>
			<Child clickChild={clickChild} />
		</div>
	);
};

const TestHook = () =>
{
	const [count, setCount] = useState(0);

	const isEvenNumber = useMemo(() =>
	{
		console.log('isEvenNumber');
		return count % 2 === 0;
	}, [count]);

	const isEvenNumber2 = () =>
	{
		console.log('isEvenNumber2');
		return count % 2 === 0;
	};

	const onClick = useCallback(() =>
	{
		console.log('onClick');
		setCount(preCount =>
		{
			return preCount + 1;
		});
	}, [count]);

	console.log('re-render');

	return (
		<div>
			<div>{count} is {isEvenNumber2() ? 'even' : 'odd'} number</div>
			<button onClick={onClick}>Click Me</button>
		</div>
	);
};


export default function Home()
{
	return (
		<div>
			<h2>Home</h2>
			<Parent></Parent>
			<h2>TestHook</h2>
			<TestHook></TestHook>
		</div>
	);
}