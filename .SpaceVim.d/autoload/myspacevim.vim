function! myspacevim#before() abort
	call SpaceVim#custom#SPC('nnoremap', ['p', 'f'], ':CocCommand fzf-preview.FromResources project_mru git', 'find files in current project', 1)
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
	let g:ale_fixers = {
\		'*': ['remove_trailing_lines', 'trim_whitespace'],
\		'javascript': ['eslint'],
\		'vue': ['eslint'],
\	}

	nmap <silent> <C-k> <Plug>(ale_previous_wrap)
	nmap <silent> <C-j> <Plug>(ale_next_wrap)
	nnoremap <C-T> :Vista finder coc<cr>

	call coc#config('coc.preferences', {
				\ "diagnostic.displayByAle": 1,
				\ "coc.preferences.extensionUpdateCheck": "daily",
				\ "phpactor.enable": 1,
				\ "phpactor.path": "/home/fran/phpactor/bin/phpactor",
				\})

	command! -bang -nargs=* Ag call fzf#vim#ag(<q-args>, fzf#vim#with_preview({'options': '--delimiter : --nth 4..'}), <bang>0)

endfunction
