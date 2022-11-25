type TButton = {
  className?: string | undefined; 
  submit?: boolean;
  children: any;
  onClick?(e: MouseEvent): void;
}

export function Button({className = undefined, submit = false, children = undefined, onClick}: TButton) {  
  const props = {
    className: className ? `Button ${className}` : 'Button',
    onClick,
    submit,
  }

  return (
    <button {...props}>
      {children}
    </button>
  )
}
