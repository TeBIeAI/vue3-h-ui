export type UseDelayedToggleProps = {
  open: (event?: Event) => void
  close: (event?: Event) => void
}

export const useDelayedToggle = ({ open, close }: UseDelayedToggleProps) => {
  const onOpen = () => {
    setTimeout(() => {
      open()
    })
  }
  const onClose = () => {
    setTimeout(() => {
      close()
    })
  }

  return {
    onClose,
    onOpen
  }
}
