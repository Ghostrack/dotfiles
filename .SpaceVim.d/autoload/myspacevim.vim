function! myspacevim#before() abort
	call SpaceVim#custom#SPC('nnoremap', ['p', 'f'], ':CocCommand fzf-preview.FromResources project_mru git', 'find files in current project', 1)
endfunction

function! myspacevim#after() abort
    set ignorecase
    set smartcase
    set mouse=
    
    let g:ale_disable_lsp = 1
    let g:auto_save = 1
    
    nmap <silent> <C-k> <Plug>(ale_previous_wrap)
    nmap <silent> <C-j> <Plug>(ale_next_wrap)
    nnoremap <C-T> :Vista finder coc<cr>

    call coc#config('coc.preferences', {
        \ "diagnostic.displayByAle": 1,
        \ "coc.preferences.extensionUpdateCheck": "daily",
        \ "phpactor.enable": 1,
        \ "phpactor.path": "/home/fran/phpactor/bin/phpactor",
    \})
endfunction 
