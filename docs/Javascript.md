# Callback when close the openned window

```javascript
function open(path:string,callback?:()=void)=>{
	var opennedWindow:Window|null=window.open(path);
	opennedWindow?.addEventListener('beforeunload',function(e:BeforeUnloadEvent){
		callback?.();
	});
}
```

