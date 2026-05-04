import './Button.css';
export default function Button({ children, variant='primary', size='md', fullWidth, onClick, type='button', disabled, as: Tag = 'button', ...props }) {
  return <Tag type={type} className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${disabled ? 'btn-disabled' : ''}`} onClick={onClick} disabled={disabled} {...props}>{children}</Tag>;
}