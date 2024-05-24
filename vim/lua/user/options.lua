vim.opt.cmdheight = 0

-- Convert tabs to spaces
vim.opt.expandtab = true

-- Tab character size
vim.opt.shiftwidth = 4
vim.opt.tabstop = 4
vim.opt.softtabstop = 4

-- Keep indent on new lines
vim.opt.smartindent = true

-- Disable line wrapping
vim.opt.wrap = false

-- Show line number on current line
vim.opt.number = true

-- Show relative line numbers for all other lines
vim.opt.relativenumber = true

-- Vim command autocompletion mode
vim.opt.wildmode = 'longest:full,full'

-- Update terminal title
vim.opt.title = true

-- Disable mouse controls
vim.opt.mouse = 'a'
vim.opt.mousemoveevent = true -- Allow hovering in bufferline

-- Enable full terminal colours
vim.opt.termguicolors = true

-- Make search case insensitive, unless an uppercase character is present
vim.opt.ignorecase = true
vim.opt.smartcase = true

-- Set special characters for tabs and trailing whitespace
vim.opt.list = true
vim.opt.listchars = { tab = '▸ ', trail = '·' }

-- Remove empty line characters
vim.opt.fillchars:append({ eob = ' ' })

-- Open new splits below and on the right of current buffer
vim.opt.splitbelow = true
vim.opt.splitright = true

-- Keep set distance from end of screen while scrolling
vim.opt.scrolloff = 8
vim.opt.sidescrolloff = 8

-- Use system clipboard
vim.opt.clipboard = 'unnamedplus'

-- Enable confirmation instead of errors
-- vim.opt.confirm = true

-- Keep undo history
vim.opt.undofile = true

-- Store file backups
vim.opt.backup = true

-- Don't store file backups in current directory
vim.opt.backupdir:remove('.')

-- Always show sign column
vim.opt.signcolumn = 'yes:2'

vim.opt.breakindent = true -- maintain indent when wrapping indented lines
vim.opt.linebreak = true -- wrap at word boundaries

vim.opt.completeopt = 'menuone,longest,preview'

vim.opt.showmode = false

vim.opt.updatetime = 4001 -- Set updatime to 1ms longer than the default to prevent polyglot from changing it

vim.opt.redrawtime = 10000 -- Allow more time for loading syntax on large files

vim.opt.exrc = true
vim.opt.secure = true
vim.opt.titlestring = '%f // nvim'

vim.g.skip_ts_context_commentstring_module = true
