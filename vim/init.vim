" Main NeoVim Config


"""""""""""""""""""""""""""""
" Simple Settings
"""""""""""""""""""""""""""""


" Show relative line number
set relativenumber

" Ignore string case when searching with /
set ignorecase

" Don't ignore string case if searching for mixed case
set smartcase

" Disable wrapping lines
set nowrap

" Automatically detect indentation from the previous line
set autoindent

" Increase indentation on the next line
set smartindent

" Size of side scrolling movement
set sidescroll=1

" Number of spaces added with Tab
set tabstop=4

" Number of spaces to remove when deleting a tab
set softtabstop=4

" Number of spaces for indentation
set shiftwidth=4

" Update interval for the UI
set updatetime=300

" Autocomplete triggers
set completeopt=noinsert,menuone,noselect

" Maintain undo history between sessions
set undofile
set undodir=~/.vim/undodir

" Disable legacy vi compatibility
set nocompatible

" Command line height in lines
set cmdheight=2

" Enable signs in number column
set signcolumn=number

" Enable true colours, if the terminal supports it
if (has("termguicolors"))
  set termguicolors
endif


"""""""""""""""""""""""""""""
" Global and Plugin variables
"""""""""""""""""""""""""""""


" Enable auto save when switching to normal mode
let g:auto_save = 1

" Theme settings
let g:forest_night_enable_italic = 1
let g:forest_night_disable_italic_comment = 1

" Set Lighline Colour Theme
let g:lightline = {'colorscheme' : 'forest_night'}

" PHP Executable used by PhpActor
let g:phpactorPhpBin = 'php'

" Show Hidden files with NERDTree
let g:NERDTreeShowHidden=1

" Disable LSP function on ALE (using CoC)
let g:ale_disable_lsp = 1

" Enable Phan for ALE
let g:ale_php_phan_executable = expand('~/vendor/bin/phan_client')
let g:ale_php_phan_use_client = 1

" Super Tab Plugin Settings
let g:SuperTabDefaultCompletionType = '<C-n>'

" Vista Plugin Settings
let g:vista_default_executive = 'coc'
let g:vista#renderer#enable_icon = 1
let g:vista_icon_indent = ["╰─▸ ", "├─▸ "]
let g:vista_fzf_preview = ['right:50%']

" CoC Plugin Settings
let g:coc_snippet_next = '<c-j>'
let g:coc_snippet_prev = '<c-k>'
let g:coc_snippet_next = '<tab>'


"""""""""""""""""""""""""""""
" Key and Shortcut Mappings
"""""""""""""""""""""""""""""


" Auto self closing braces
inoremap " ""<left>
inoremap ' ''<left>
inoremap ( ()<left>
inoremap [ []<left>
inoremap { {}<left>
inoremap {<CR> {<CR>}<ESC>O
inoremap {;<CR> {<CR>};<ESC>O

" Refresh CoC autocomplete results
inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"
inoremap <silent><expr> <cr> pumvisible() ? coc#_select_confirm() : "\<C-g>u\<CR>\<c-r>=coc#on_enter()\<CR>"
inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()

" Not sure what this does anymore, probably found somewhere on stackoverflow
function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

" Map Coc FZF Shortcuts
nnoremap <c-s> :CocCommand fzf-preview.FromResources project_mru git<cr>
nnoremap <C-G> :CocCommand fzf-preview.GitStatus<cr>
nnoremap <C-B> :CocCommand fzf-preview.Buffers<cr>
nnoremap <C-L> :CocCommand fzf-preview.Lines --add-fzf-arg=--no-sort --add-fzf-arg=--query="'"<cr>

" Map opening Vista Tag Viewer
nnoremap <C-T> :Vista finder coc<cr>
nnoremap <Leader>t :Vista!!<cr>

" Toggle NERDTree
map <C-n> :NERDTreeToggle<CR>

" Move between ALE errors
nmap <silent> <C-k> <Plug>(ale_previous_wrap)
nmap <silent> <C-j> <Plug>(ale_next_wrap)

" Move between CoC snippet placeholder
imap <C-l> <Plug>(coc-snippets-expand)
imap <C-j> <Plug>(coc-snippets-expand-jump)
vmap <C-j> <Plug>(coc-snippets-select)


"""""""""""""""""""""""""""""
" Commands
"""""""""""""""""""""""""""""


" Register Ag command, to be used with the silver searcher
command! -bang -nargs=* Ag call fzf#vim#ag(<q-args>, {'options': '--delimiter : --nth 4..'}, <bang>0)

" Redraw syntax highlighting when entering a buffer
autocmd BufEnter * :syntax sync fromstart


"""""""""""""""""""""""""""""
" Plugins
"""""""""""""""""""""""""""""


" Start Pluging Manager
call plug#begin('~/nvim/plugged')

" FZF: Fuzzy Finder
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
Plug 'junegunn/fzf.vim'
Plug 'yuki-ycino/fzf-preview.vim', { 'branch': 'release/rpc', 'do': ':UpdateRemotePlugins' }

" Fugitive: Git Manager
Plug 'tpope/vim-fugitive' | Plug 'mhinz/vim-signify'

" ALE: Async Syntaxt Analysis Tool
Plug 'dense-analysis/ale'

"Vim Auto Save
Plug '907th/vim-auto-save'

" Lightline: Fancy status bar
Plug 'itchyny/lightline.vim'

" Nerdtree: File tree
Plug 'scrooloose/nerdtree'
Plug 'Xuyuanp/nerdtree-git-plugin'

" CoC: Code completion and VS Code LSPs
Plug 'neoclide/coc.nvim', {'branch': 'release'}

" NerdCommenter: utility for quick comment / uncomment
Plug 'scrooloose/nerdcommenter'

" VimSnippets: snippets manager
Plug 'honza/vim-snippets'

" Phpactor: Completion and Refactoring tool for PHP
Plug 'phpactor/phpactor' ,  {'do': 'composer install', 'for': 'php'}

" VimPolyglot: Syntaxt highlighting
Plug 'sheerun/vim-polyglot'

" Supertab: smart TAB behaviour, mix code completion and snippets
Plug 'ervandew/supertab'

" Emmet: emmet syntaxt for vim
Plug 'mattn/emmet-vim'

" VimVue: Vue syntaxt highlighting for Vim
Plug 'posva/vim-vue'

" Signature: Toggle and display marks
Plug 'kshenoy/vim-signature'

" Smoothie: Smooth Scrolling
Plug 'psliwka/vim-smoothie'

" Vista: Tag manager and navigation
Plug 'liuchengxu/vista.vim'

" Sonokai: Theme
Plug 'sainnhe/sonokai'

" Automatic folding for PHP
Plug 'rayburgemeestre/phpfolding.vim'

" Stop plugin manager
call plug#end()

" Turn on syntax highlighting
syntax on

set background=dark
colorscheme sonokai

" Generate help tags from all packages and ignore errors
silent! helptags ALL
