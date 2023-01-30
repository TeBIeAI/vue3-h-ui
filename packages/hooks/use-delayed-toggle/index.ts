export type UseDelayedToggleProps = {
  open: (event?: Event) => void
  close: (event?: Event) => void
}

export const useDelayedToggle = ({ open, close }: UseDelayedToggleProps) => {
  const onOpen = () => {
    setTimeout(() => {
      debugger
      open()
    }, 0)
  }
  const onClose = () => {
    setTimeout(() => {
      close()
    }, 200)
  }

  return {
    onClose,
    onOpen
  }
}
