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
    vmap <leader>f  <Plug>(coc-format-selected)
    nmap <leader>f  <Plug>(coc-format-selected)

    if has('nvim')
        inoremap <silent><expr> <c-space> coc#refresh()
    else
        inoremap <silent><expr> <c-@> coc#refresh()
    endif

    inoremap <silent><expr> <CR> coc#pum#visible() ? coc#_select_confirm()
                \: "\<C-g>u\<CR>\<c-r>=coc#on_enter()\<CR>"

    inoremap <silent><expr> <TAB>
                \ coc#pum#visible() ? coc#pum#next(1):
                \ coc#expandableOrJumpable() ?
                \ "\<C-r>=coc#rpc#request('doKeymap', ['snippets-expand-jump',''])\<CR>" :
                \ <SID>check_back_space() ? "\<TAB>" :
                \ coc#refresh()

    inoremap <expr><S-TAB> coc#pum#visible() ? coc#pum#prev(1) : "\<C-h>"

    function! s:check_back_space() abort
        let col = col('.') - 1
        return !col || getline('.')[col - 1]  =~# '\s'
    endfunction

    let g:coc_snippet_next = '<tab>'

	command! -bang -nargs=* Ag call fzf#vim#ag(<q-args>, fzf#vim#with_preview({'options': '--delimiter : --nth 4..'}), <bang>0)

    command! -nargs=0 Fix :CocCommand eslint.executeAutofix
    command! -nargs=0 Prettier :CocCommand prettier.forceFormatDocument

endfunction
