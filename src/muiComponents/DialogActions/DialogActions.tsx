import React, { forwardRef } from 'react';
import { default as MaterialUIDialogActions, DialogActionsProps } from '@material-ui/core/DialogActions';

type DialogActionsRef = HTMLDivElement;

const DialogActions = forwardRef<DialogActionsRef, DialogActionsProps>(function DialogActions(props, ref) {
  return <MaterialUIDialogActions {...props} ref={ref} />;
});

export default DialogActions;
