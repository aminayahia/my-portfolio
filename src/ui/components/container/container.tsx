import clsx from "clsx";

interface Props{
  children: React.ReactNode;
  className?: string;
}

export const Container = ({children,className}:Props)=>{
  return(
    <>
    <div className={clsx(className,"w-full md:max-w-7xl px-5 lg:px--10 mx-auto")}>
      {children}
    </div>
    </>
  )
}