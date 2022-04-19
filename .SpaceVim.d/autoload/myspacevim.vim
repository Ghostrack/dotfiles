function! myspacevim#before() abort
	call SpaceVim#custom#SPC('nnoremap', ['p', 'f'], ':CocCommand fzf-preview.FromResources project_mru git', 'find files in current project', 1)
	call SpaceVim#custom#SPC('nnoremap', ['j', 'g'], ':PhpactorGotoDefinition', 'find files in current project', 1)
endfunction

function! myspacevim#after() abort
	set ignorecase
	set smartcase
	set mouse=
	set undofile " Maintain undo history between sessions
	set undodir=~/.vim/undodir
	set nocompatible

	let g:ale_disable_lsp = 1
	let g:auto_save = 1
    let g:fzf_preview_window = ['down:60%', 'ctrl-/']

	nmap <silent> <C-k> <Plug>(ale_previous_wrap)
	nmap <silent> <C-j> <Plug>(ale_next_wrap)
	nnoremap <C-T> :Vista finder coc<cr>

	command! -bang -nargs=* Ag call fzf#vim#ag(<q-args>, fzf#vim#with_preview({'options': '--delimiter : --nth 4..'}), <bang>0)

endfunction
