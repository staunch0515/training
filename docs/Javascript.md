# Callback when close the openned window

```javascript
function open(path:string,callback?:()=void)=>{
	var opennedWindow:Window|null=window.open(path);
	opennedWindow?.addEventListener('beforeunload',function(e:BeforeUnloadEvent){
		callback?.();
	});
}
```

## PostMessage

```
window.opener.postMessage({
	type:"",
	payload:{
		screen:screen
	}
},'*')

```

## Equal

```javascript
""?  return false;
"123"==="123"? return true;
```

