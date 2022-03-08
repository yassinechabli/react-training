# Hooks suite


### useCallback 

This allows us to isolate resource intensive functions so that they will not automatically run on every render.

The useCallback Hook only runs when one of its dependencies update.

This can improve performance.

The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useMemo in the useMemo chapter.


    useCallback(()=>{}, [deps])




### Model View Controller Pattern for React


