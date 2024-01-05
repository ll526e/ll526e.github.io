export const HeaderExtra = () => {
  const classNames = useClassnames(['text-red'], {
    'font-size-14px': true
  })
  return (
    <div>
      <span className={classNames}>Extra</span>
    </div>
  );
}